from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.views import View


def index(request):
    return render(request, 'index.html')


def cambioEstado(request, estado, usuario):
    user = User.objects.get(pk=usuario)
    if estado:
        user.is_active = 1
    else:
        user.is_active = 0
    user.save()
    return HttpResponse(user)


class UsuariosView(View):

    def get(self, request, *args, **kwargs):
        users = User.objects.all()
        return render(request, 'usuarios.html', {'users': users})

    def post(self, request, *args, **kwargs):
        print(request.POST['nombre'])
        print(request.POST['clave'])
        user = User(username=request.POST['nombre'],
                    password=request.POST['clave'])
        user.save()
        return HttpResponse('Ok')
