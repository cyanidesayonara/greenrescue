from django.urls import path, include

from django.contrib import admin

admin.autodiscover()

import hello.views as views

# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path(r"^$", views.index, name="index"),
    path(r"^list/$", views.list, name="list"),
    path(r"^detail/$", views.detail, name="detail"),
    path("^db/$", views.db, name="db"),
    path("^admin/$", admin.site.urls),
]

