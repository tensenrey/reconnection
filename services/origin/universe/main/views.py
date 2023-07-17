from django.shortcuts import render
from .models import input
from .formes import fileinp


def index(request):
    data = {
        'lis': [1, 2, 3, 4, 5]
    }
    return render(request, "index.html", data)


def fileinput(request):
    form = fileinp()
    return render(request, "index.html", {'form': form, 'input': input})

