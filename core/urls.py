from django.urls import path
from core.views import IndexView, WelcomeScreen

urlpatterns = [
    path('strgiorgio', IndexView.as_view(), name='index'),
    path('', WelcomeScreen.as_view(), name='welcome')
]