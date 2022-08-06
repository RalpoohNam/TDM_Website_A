from django.shortcuts import render

# Create your views here.


def marketinfo_news(request):
    return render(request, 'marketinfoapp/marketinfonews.html')

