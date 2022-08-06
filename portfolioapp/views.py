from django.shortcuts import render


# Create your views here.


def portfolio_dash(request):
    return render(request, 'portfolioapp/portfoliodash.html')
