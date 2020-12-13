from django.shortcuts import render,redirect
from django.http.response import HttpResponse
from django.http import HttpResponseRedirect
from .forms import UploadModelForm
from .models import Photo

def index(request):

    photos = Photo.objects.all()

    form = UploadModelForm()

    if request.method == "POST":
        form = UploadModelForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/posts')
            

    context = {
        'photos': photos,
        'form': form
    }

    return render(request, 'videowall/index.html', context)