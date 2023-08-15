from django.shortcuts import render
from .formes import fileinput


def fileinp(request):
    form = fileinput(request.POST, request.FILES)
    context = {"form": form}
    return render(request, "index.html", context)

def index(request):
    data = {
        'lis': [1, 2, 3, 4, 5]
    }
    return render(request, "index.html", data)




