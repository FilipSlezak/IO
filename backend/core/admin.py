from django.contrib import admin
from core.models import SimpleTask
# Register your models here.

class SimpleTaskAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'creator']

admin.site.register(SimpleTask, SimpleTaskAdmin)