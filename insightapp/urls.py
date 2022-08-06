from django.urls import path

from insightapp.views import insight_home

urlpatterns = {
    path('', insight_home),
}