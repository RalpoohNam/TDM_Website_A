from django.shortcuts import render


# Create your views here.

def insight_home(request):
    return render(request, 'insightapp/insighthome.html')
