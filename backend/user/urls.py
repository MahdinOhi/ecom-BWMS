from django.urls import path
from .views import home, ProtectedView, success_view
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # JWT authentication endpoints
    path('auth/jwt/create/', TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('auth/jwt/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Custom auth views
    path('', home, name='home'),
    # path('login/', login_form, name='login'),
    # path('signup/', SignupView.as_view(), name='signup'),
    path('protected/', ProtectedView.as_view(), name='protected'),
    path('success/', success_view, name='success'),
]
