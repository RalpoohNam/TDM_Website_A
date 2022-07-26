from django.urls import path, include

from kimpinfoapp.views import kimp_table

app_name = "kimpinfoapp"

urlpatterns = [
    path('kimp_table/', kimp_table)
]
