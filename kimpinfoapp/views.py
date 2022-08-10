from django.http import HttpResponse
from django.shortcuts import render
from requests import Request,Session
from requests.exceptions import  ConnectionError, Timeout, TooManyRedirects
import json


# Create your views here.

def hello_world(request):
    return HttpResponse('hello!!!')


def kimp_table(request):
    return render(request, 'kimpinfoapp/table.html')


def mockuppage(request):
    return render(request, 'kimpinfoapp/test.html')