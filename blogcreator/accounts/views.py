from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .serializers import SignupSerializer
from django.contrib import messages
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from datetime import timedelta
from django.utils import timezone
# Create your views here.

class userSignup(APIView):
    permission_classes={AllowAny}
    def post(self,request):
        serializer=self.get_serializer(data=request.data)
        if serializer.is_valid():
           serializer.save()
           return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get_serializer(self, *args, **kwargs):
        return SignupSerializer(*args, **kwargs)
    
    
class userLogout(APIView):
    permission_classes={IsAuthenticated}
    authentication_classes=[JWTAuthentication]
    def post(self,request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.access_token.lifetime = timedelta(seconds=1)
            token.access_token.set_exp = timezone.now()
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        