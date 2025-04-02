from django.contrib.auth import login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, DetailView, DeleteView
from django.contrib.auth.views import LoginView, LogoutView

from Shop.account.forms import CreateProfileForm, EditProfileForm
from Shop.account.test_funcions import NotAuthenticatedUser, OwnProfileAccessMixin
from Shop.shop_app.models import Profile



# TODO Edit username, change password,

# DONE - Register, Login, Logout, Edit, ProfileDetails, DeleteProfile

class CreateProfile(NotAuthenticatedUser, CreateView):

    form_class = CreateProfileForm
    template_name = 'account/register.html'
    success_url = reverse_lazy('home page')

    def form_valid(self, form):

        response = super().form_valid(form)
        user = form.save()
        login(self.request,user)
        return response

class LoginUser(NotAuthenticatedUser,LoginView):

   template_name = 'account/login.html'


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

