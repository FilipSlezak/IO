from rest_framework import serializers
from core.models import SimpleTask

class SimpleTaskSerializer(serializers.ModelSerializer):
    creator = serializers.SlugRelatedField(slug_field="username", read_only=True)
    class Meta:
        model = SimpleTask
        fields = ['id', 'title', 'description', 'creator', 'created_at']
        extra_kwargs = {"created_at": {"required": False}, "creator": {"required": False}}