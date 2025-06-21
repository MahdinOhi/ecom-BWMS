from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, OTP


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    model = User
    list_display = ('email', 'first_name', 'last_name',
                    'phone', 'address', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    search_fields = ('email', 'first_name', 'last_name', 'phone', 'address')
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {
         'fields': ('first_name', 'last_name', 'phone', 'address')}),
        ('Permissions', {'fields': ('is_active', 'is_staff',
         'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'phone', 'address', 'is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
    )


@admin.register(OTP)
class OTPAdmin(admin.ModelAdmin):
    list_display = ('user', 'code', 'created_at', 'is_verified')
    search_fields = ('user__email', 'code')
    list_filter = ('is_verified',)
