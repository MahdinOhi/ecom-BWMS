from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views import View
from .serializers import RegisterSerializer


class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "msg": "You're authenticated!",
            "user": {
                "username": request.user.username,
                "email": request.user.email,
                "userId": str(request.user.userId)
            }
        })


def home(request):
    return HttpResponse("Welcome to the User Home Page")





def success_view(request):
    return HttpResponse("You're successfully logged in!")
