from rest_framework import generics
from django.contrib.auth import authenticate
from .models import Product
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductSerializer, LoginSerializer, RegisterSerializer
from .models import Product
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



class LoginView(APIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    @swagger_auto_schema(
        request_body=LoginSerializer,
        responses={200: openapi.Response('Login success'), 401: 'Unauthorized'}
    )
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            return Response({
                'message': 'Login successful',
                'username': user.username,
                'email': user.email
            })
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    
    