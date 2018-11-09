from django.shortcuts import render
from django.http import HttpResponse, Http404

from .models import Greeting

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")

def results(request):
    if request.is_ajax():
        return render(request, "results.html")
    raise Http404

def detail(request):
    if request.is_ajax():
        return render(request, "detail.html")
    raise Http404

def settings(request):
    if request.is_ajax():
        return render(request, "settings.html")
    raise Http404


