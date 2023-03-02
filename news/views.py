from django.shortcuts import get_object_or_404
from rest_framework import generics 
from django.urls import path
from .models import Article
from .serializers import ArticleSerializer

# Create your views here.

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()    
    serializer_class = ArticleSerializer