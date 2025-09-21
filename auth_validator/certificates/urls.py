# certificates/urls.py
from django.urls import path
from . import views
from .views import upload_certificate, verify_certificate, student_certificates

urlpatterns = [
    path("upload/", views.upload_certificate, name="upload"),
    path("verify/", views.verify_certificate, name="verify"),
    path("upload/", upload_certificate, name="upload"),
    path("verify/", verify_certificate, name="verify"),
    path("my-certificates/", student_certificates, name="student_certificates"),
]
