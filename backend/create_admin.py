from django.contrib.auth import get_user_model
import os
import re

UserModel = get_user_model()
if not UserModel.objects.filter(username='admin').exists():
  u = UserModel.objects.create_user('admin', password='admin')
  u.is_superuser = True
  u.is_staff = True
  u.save()
