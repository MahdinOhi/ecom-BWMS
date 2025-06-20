from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, throttling
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User, OTP
from .serializers import RegisterSerializer, OTPVerifySerializer, LoginSerializer, ProfileSerializer
from .utils import generate_otp, send_otp_email

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


class RegisterThrottle(throttling.UserRateThrottle):
    rate = '5/min'

class RegisterView(APIView):
    throttle_classes = [RegisterThrottle]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            code = generate_otp()
            OTP.objects.create(user=user, code=code)
            send_otp_email(user.email, code)
            return Response({'message': 'OTP sent to email.'}, status=201)
        return Response(serializer.errors, status=400)

class VerifyOTPView(APIView):
    def post(self, request):
        serializer = OTPVerifySerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            code = serializer.validated_data['code']
            try:
                user = User.objects.get(email=email)
                otp = OTP.objects.filter(user=user, code=code, is_verified=False).last()
                if not otp or otp.is_expired():
                    return Response({'error': 'Invalid or expired OTP.'}, status=400)
                otp.is_verified = True
                otp.save()
                user.is_active = True
                user.save()
                return Response({'message': 'Account verified.'})
            except User.DoesNotExist:
                return Response({'error': 'User not found.'}, status=404)
        return Response(serializer.errors, status=400)

class ResendOTPView(APIView):
    throttle_classes = [RegisterThrottle]

    def post(self, request):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            if user.is_active:
                return Response({'error': 'User already verified.'}, status=400)
            code = generate_otp()
            OTP.objects.create(user=user, code=code)
            send_otp_email(user.email, code)
            return Response({'message': 'OTP resent.'})
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=404)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, username=email, password=password)
            if user and user.is_active:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'access': str(refresh.access_token),
                    'refresh': str(refresh),
                })
            return Response({'error': 'Invalid credentials or unverified account.'}, status=400)
        return Response(serializer.errors, status=400)

class ProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = ProfileSerializer(request.user)
        return Response(serializer.data)

