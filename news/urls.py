from django.urls import path, include
from .views import ArticleListAPIView, ArticleDetailAPIView


#https://www.django-rest-framework.org/api-guide/views/
#django-rest-framework class and function based views



urlpatterns = [
    path('article/<int:pk>', ArticleDetailAPIView.as_view() ),
     path('article/', ArticleListAPIView.as_view() ),
]