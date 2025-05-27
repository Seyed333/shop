from django.urls import path
from .views import RegisterView, ProductListView, LoginView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('login/', LoginView.as_view(), name='login'),
]
