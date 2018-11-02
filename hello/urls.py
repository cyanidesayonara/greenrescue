from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("drop/", views.drop, name="drop"),
    path("detail/", views.detail, name="detail"),
    path("db/", views.db, name="db"),
    path("settings/", views.settings, name="settings"),
]
