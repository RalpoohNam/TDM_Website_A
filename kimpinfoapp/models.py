from django.db import models

# Create your models here.

class Request(models.Model):
    baseExchange = models.CharField(max_length=50)
    compExchage = models.CharField(max_length=50)

