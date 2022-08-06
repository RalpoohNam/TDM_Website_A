from django.urls import path

from marketinfoapp.views import marketinfo_news

urlpatterns = {
    path('', marketinfo_news),
}
