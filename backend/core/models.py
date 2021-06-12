from django.db import models
from django.conf import settings
from django.utils import timezone
# Create your models here.

class SimpleTask(models.Model):
    title = models.CharField(max_length=32)
    description = models.CharField(max_length=64)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)