from django.urls import path, include   


#urls

urlpatterns = [
    path('', include('accounts.urls')),
    path('news/', include('news.urls')),
]