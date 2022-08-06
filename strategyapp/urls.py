from django.urls import path

from strategyapp.views import strategy_home

urlpatterns = {
    path('', strategy_home),
}
