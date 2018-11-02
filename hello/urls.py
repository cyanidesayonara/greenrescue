from django.conf.urls import url
from index import views

urlpatterns = [
    url("", views.index, name="index"),
    url("list/", views.list, name="list"),
    url("detail/", views.detail, name="detail"),
]
