from django.urls import path, include
from rest_framework.routers import SimpleRouter
from core.views import SimpleTaskViewSet

router = SimpleRouter()

router.register(r'tasks', SimpleTaskViewSet, basename='task')

urlpatterns = [
    path("", include(router.urls)),
]
