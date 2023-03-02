from django.db import models
from django.conf import settings

# Create your models here.


#https://docs.djangoproject.com/en/4.1/topics/db/models/
#Django models documentation 

class Article(models.Model): 
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=255)
    body = models.TextField()




    def __str__(self):
        return self.title