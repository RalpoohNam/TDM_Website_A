from django.urls import path, include

from kimpinfoapp.views import kimp_table, mockuppage

app_name = "kimpinfoapp"

urlpatterns = [
    path('',mockuppage),
    path('kimp_table/', kimp_table)
]
