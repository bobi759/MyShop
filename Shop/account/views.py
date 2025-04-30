from django.contrib.auth import login, logout, get_user_model
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, DetailView, DeleteView, TemplateView
from django.contrib.auth.views import LoginView, LogoutView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView

from Shop.account.forms import CreateProfileForm, EditProfileForm
from Shop.account.test_funcions import NotAuthenticatedUser, OwnProfileAccessMixin
from Shop.shop_app.models import Profile


import jwt
import datetime

User = get_user_model()


class CreateProfile(NotAuthenticatedUser, TemplateView):

    template_name = 'account/register.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["form"] = CreateProfileForm
        return context

class LoginUser(NotAuthenticatedUser,TemplateView):

   template_name = 'account/login.html'

   def get_context_data(self, **kwargs):
       context = super().get_context_data(**kwargs)
       context["form"] = AuthenticationForm
       return context



class LogoutUser(LogoutView):
    pass

class EditProfile(OwnProfileAccessMixin, UpdateView):

    model = Profile
    template_name = "account/edit-profile.html"
    form_class = EditProfileForm
    success_url = reverse_lazy('home page')

class ProfileDetails(LoginRequiredMixin,DetailView):

    model = Profile
    template_name = "account/profile-details.html"
    context_object_name = 'profile'

class DeleteProfile(OwnProfileAccessMixin,DeleteView):

    model = Profile
    template_name = "account/profile-delete.html"
    success_url = reverse_lazy("home page")

    def form_valid(self, form):
        self.object.user.delete()
        self.object.delete()
        logout(self.request)
        return redirect(self.success_url)



