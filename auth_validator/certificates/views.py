# certificates/views.py
import hashlib
import logging

from django.db import IntegrityError, transaction
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .models import Certificate
from .blockchain import blockchain

# Set up logger
logger = logging.getLogger(__name__)
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
)

# Utility function to generate file hash
def generate_hash(file_obj):
    hasher = hashlib.sha256()
    for chunk in file_obj.chunks():
        hasher.update(chunk)
    return hasher.hexdigest()


# =========================
# Upload Certificate
# =========================
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
@permission_classes([IsAuthenticated])
def upload_certificate(request):
    logger.info(f"FILES: {request.FILES.keys()}, DATA: {request.data}")

    # Only institutions can upload
    if request.user.profile.role != "institution":
        return Response({"error": "Only institutions can upload certificates"}, status=403)

    # Validate file
    file_obj = request.FILES.get('file')
    if not file_obj:
        return Response({"error": "No file provided"}, status=400)

    # Validate student name
    student_name = request.data.get("student_name")
    if not student_name:
        return Response({"error": "student_name is required"}, status=400)

    # Generate hash
    cert_hash = generate_hash(file_obj)

    # Save certificate safely
    try:
        with transaction.atomic():
            cert, created = Certificate.objects.get_or_create(
                hash_value=cert_hash,
                defaults={
                    "institution": request.user.profile,
                    "student_name": student_name,
                    "file": file_obj,
                }
            )
            if not created:
                return Response({"message": "Certificate already exists", "hash": cert_hash}, status=200)

    except IntegrityError:
        # Rare race condition
        cert = Certificate.objects.get(hash_value=cert_hash)
        return Response({"message": "Certificate already exists", "hash": cert.hash_value}, status=200)

    # Add to blockchain
    blockchain.add_block(cert_hash)

    # Log upload
    logger.info(f"Certificate uploaded: {cert.student_name} by {request.user.username}, Hash: {cert_hash}")

    return Response({"message": "Certificate uploaded", "hash": cert_hash}, status=201)


# =========================
# Verify Certificate
# =========================
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
@permission_classes([AllowAny])
def verify_certificate(request):
    # Validate file
    file_obj = request.FILES.get('file')
    if not file_obj:
        return Response({"error": "No file provided"}, status=400)

    # Generate hash
    cert_hash = generate_hash(file_obj)

    # Check blockchain
    valid = blockchain.is_valid(cert_hash)

    # Log verification attempt
    username = getattr(request.user, 'username', 'Anonymous')
    logger.info(f"Certificate verification attempted by {username}: Hash {cert_hash}, Valid: {valid}")

    return Response({"valid": valid, "hash": cert_hash})


# =========================
# Student Certificates
# =========================
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def student_certificates(request):
    if request.user.profile.role != "student":
        return Response({"error": "Only students can view their certificates"}, status=403)

    certs = Certificate.objects.filter(student_name=request.user.username)

    data = [
        {
            "student_name": cert.student_name,
            "institution": cert.institution.user.username,
            "hash": cert.hash_value,
            "uploaded_at": cert.created_at
        }
        for cert in certs
    ]

    return Response({"certificates": data})
