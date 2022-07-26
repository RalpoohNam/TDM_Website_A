from django.urls import path, include

from kimpinfoapp.views import hello_world

app_name="kimpinfoapp"

urlpatterns = [
    path('hello_world/', hello_world)
]
