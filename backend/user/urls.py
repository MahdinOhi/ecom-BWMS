from django.urls import path
from .views import RegisterView, VerifyOTPView, LoginView, ProfileView, ResendOTPView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('verify-otp/', VerifyOTPView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('resend-otp/', ResendOTPView.as_view()),
]
