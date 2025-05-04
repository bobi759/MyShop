from django.contrib.auth import get_user_model
from django.contrib.auth.forms import AuthenticationForm
from django.urls import reverse_lazy
from django.views.generic import UpdateView, TemplateView

from Shop.account.forms import CreateProfileForm, EditProfileForm
from Shop.api.authentication import FlexibleJWTAuthMixin, EnsureOwnProfileMixin
from Shop.shop_app.models import Profile

User = get_user_model()


class CreateProfile(FlexibleJWTAuthMixin, TemplateView):
    allow_authenticated = False
    unauthorized_user_redirect = reverse_lazy("home page")
    template_name = 'account/register.html'
    extra_context = {"form": CreateProfileForm}


class LoginUser(FlexibleJWTAuthMixin, TemplateView):
    allow_authenticated = False
    unauthorized_user_redirect = reverse_lazy("home page")
    template_name = 'account/login.html'
    extra_context = {"form": AuthenticationForm}


# Maybe modal, do later
class LogoutUser(TemplateView):
    template_name = 'account/profile-logout.html'

# CONTEXT REPEATED

class EditProfile(EnsureOwnProfileMixin,TemplateView):
    template_name = "account/edit-profile.html"
    target_named_url = "profile details"




class ProfileDetails(EnsureOwnProfileMixin, TemplateView):
    template_name = "account/profile-details.html"
    target_named_url = "profile details"


class DeleteProfile(EnsureOwnProfileMixin, TemplateView):
    template_name = "account/profile-delete.html"
    target_named_url = "delete profile"

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context["user"] = self.request.user
        return context
