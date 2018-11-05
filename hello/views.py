from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    if request.is_ajax():
        return render(request, "search.html")
    return render(request, "index.html")

def results(request):
    return render(request, "results.html")

def detail(request):
    return render(request, "detail.html")

def settings(request):
    return render(request, "settings.html")

def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
