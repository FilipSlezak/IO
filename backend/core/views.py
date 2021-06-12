from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from core.models import SimpleTask
from core.serializers import SimpleTaskSerializer

# Create your views here.
class SimpleTaskViewSet(ModelViewSet):
    serializer_class = SimpleTaskSerializer
    queryset = SimpleTask.objects.all()