from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("results/", views.results, name="results"),
    path("detail/", views.detail, name="detail"),
    path("settings/", views.settings, name="settings"),
    path("basket/", views.basket, name="basket"),
    path("paid/", views.paid, name="paid"),
]
