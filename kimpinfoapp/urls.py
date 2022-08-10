from django.urls import path

from kimpinfoapp import views
from kimpinfoapp.views import kimp_table, mockuppage

app_name = "kimpinfoapp"

urlpatterns = [
    # path('', mockuppage),
    # path('kimp_table/', kimp_table)
    path('', views.kimp_table),
    path('mockup/', views.mockuppage)

]
