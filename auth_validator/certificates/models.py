from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Roles
ROLE_CHOICES = (
    ('student', 'Student'),
    ('recruiter', 'Recruiter'),
    ('institution', 'Institution'),
)

# Profile
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return f"{self.user.username} - {self.role}"

# Certificate
class Certificate(models.Model):
    institution = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="certificates")
    student_name = models.CharField(max_length=255)
    file = models.FileField(upload_to="certificates/")
    hash_value = models.CharField(max_length=256, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student_name} - {self.hash_value[:10]}..."

# Signal to auto-create Profile for new users
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        # Only create profile if it doesn't exist
        if not hasattr(instance, 'profile'):
            Profile.objects.create(user=instance, role='student')  # default role
