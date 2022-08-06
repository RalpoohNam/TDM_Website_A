from django.urls import path

from kimpinfoapp.views import kimp_table, mockuppage

app_name = "kimpinfoapp"

urlpatterns = [
    # path('', mockuppage),
    # path('kimp_table/', kimp_table)
    path('', kimp_table),
    path('mockup/', mockuppage)
]
