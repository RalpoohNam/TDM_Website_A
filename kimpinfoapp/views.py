from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.

def hello_world(request):
    return HttpResponse('hello!!!')


def kimp_table(request):
    return render(request, 'kimpinfoapp/table.html')


def mockuppage(request):
    return render(request, 'kimpinfoapp/test.html')
