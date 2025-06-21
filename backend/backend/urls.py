from django.contrib import admin
from django.urls import path, include
from .views import welcome_page

admin.site.site_header = "BWMS: Admin Panel"
admin.site.site_title = "BWMS Admin Panel"
admin.site.index_title = "Welcome to the BWMS Administration"
admin.site.site_url = "http://localhost:5173/"

urlpatterns = [
    path('', welcome_page, name='welcome'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/user/', include('user.urls')),
]
