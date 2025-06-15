import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        if not username:
            raise ValueError("Username is required")

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if not password:
            raise ValueError("Superuser must have a password")

        return self.create_user(email, username, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    userId = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    createdAt = models.DateTimeField(default=timezone.now)
    address = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    isVerified = models.BooleanField(default=False)
    resetToken = models.CharField(max_length=255, blank=True, null=True)
    sessionTokens = models.JSONField(default=list, blank=True)
    autosave = models.BooleanField(default=True)
    activityLog = models.JSONField(default=list, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username

    def auth(self, password: str) -> bool:
        return self.check_password(password)

    def logout(self, session_token: str) -> bool:
        if session_token in self.sessionTokens:
            self.sessionTokens.remove(session_token)
            self.save()
            return True
        return False

    def updateSettings(self, **kwargs) -> bool:
        allowed_fields = {'autosave', 'activityLog'}
        changed = False
        for key, value in kwargs.items():
            if key in allowed_fields:
                setattr(self, key, value)
                changed = True
        if changed:
            self.save()
        return changed
