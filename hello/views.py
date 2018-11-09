from django.shortcuts import render
from django.http import HttpResponse, Http404

def index(request):
    return render(request, "index.html")

def results(request):
    return render(request, "results.html")

def detail(request):
    return render(request, "detail.html")

def settings(request):
    return render(request, "settings.html")


def basket(request):
    return render(request, "basket.html")



