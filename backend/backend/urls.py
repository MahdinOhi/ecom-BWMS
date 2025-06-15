from django.contrib import admin
from django.urls import path, include
from .views import welcome_backend  # your custom welcome view

urlpatterns = [
    path('admin/', admin.site.urls),

    # Djoser endpoints for authentication (including JWT and social auth)
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),

    # Your custom users app endpoints
    path('user/', include('user.urls')),

    # Root welcome page
    path('', welcome_backend, name='welcome-backend'),
]
