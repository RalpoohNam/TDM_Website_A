from django.urls import path

from portfolioapp.views import portfolio_dash

urlpatterns = {
    path('', portfolio_dash),
}
