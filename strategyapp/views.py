from django.shortcuts import render


# Create your views here.

def strategy_home(request):
    return render(request, 'strategyapp/strategyhome.html')
