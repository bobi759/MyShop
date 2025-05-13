from django.contrib.auth import get_user_model
from django.contrib.auth.forms import AuthenticationForm
from django.urls import reverse_lazy
from django.views.generic import TemplateView

from Shop.account.forms import CreateProfileForm
from Shop.api.authentication import CustomJWTAuthMixin, EnsureOwnProfileMixin

User = get_user_model()

class CreateProfile(CustomJWTAuthMixin, TemplateView):
    allow_authenticated = False
    unauthorized_user_redirect = reverse_lazy("home page")
    unauthenticated_user_redirect = None

    template_name = 'account/register.html'
    extra_context = {"form": CreateProfileForm}


class LoginUser(CustomJWTAuthMixin, TemplateView):
    allow_authenticated = False
    unauthorized_user_redirect = reverse_lazy("home page")
    unauthenticated_user_redirect = None

    template_name = 'account/login.html'
    extra_context = {"form": AuthenticationForm}


class LogoutUser(CustomJWTAuthMixin, TemplateView):
    unauthenticated_user_redirect = reverse_lazy("home page")

    template_name = 'account/profile-logout.html'


class EditProfile(EnsureOwnProfileMixin,TemplateView):
    template_name = "account/edit-profile.html"

    target_named_url = "profile details"


class ProfileDetails(EnsureOwnProfileMixin, TemplateView):
    template_name = "account/profile-details.html"

    target_named_url = "profile details"

