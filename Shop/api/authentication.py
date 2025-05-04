from django.contrib.auth.mixins import AccessMixin
from django.db.models.expressions import result
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from rest_framework.reverse import reverse_lazy, reverse
from rest_framework.status import HTTP_302_FOUND
from rest_framework_simplejwt.authentication import JWTAuthentication

from Shop.shop_app.models import Profile


class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        raw_token = request.COOKIES.get('token')
        if raw_token is None:
            return None

        validated_token = self.get_validated_token(raw_token)
        return self.get_user(validated_token), validated_token


class JWTUserAuthMixin:

    @staticmethod
    def authenticate_and_assign_user( request):
        auth = CookieJWTAuthentication()
        result = auth.authenticate(request)
        if result is None:
            return None
        user, _ = result
        request.user = user
        return user


class FlexibleJWTAuthMixin(JWTUserAuthMixin):
    allow_authenticated = True  # True = login required, False = only for unauthenticated users
    unauthorized_user_redirect = None
    unauthenticated_user_redirect = reverse_lazy("login profile")
    def get_unauthorized_user_redirect(self):
        """Redirect when user is authenticated but not allowed to access the view."""
        return self.unauthorized_user_redirect  # default fallback, override in subclasses if needed

    def get_unauthenticated_user_redirect(self):
        """Redirect when user is not authenticated but required."""
        return self.unauthenticated_user_redirect  # default fallback, override in subclasses

    def dispatch(self, request, *args, **kwargs):
        try:
            # There is user
            user = self.authenticate_and_assign_user(request)
            if user:
                # redirect authenticated with no permission to see this page
                return HttpResponseRedirect(self.get_unauthorized_user_redirect(),status=HTTP_302_FOUND)
            else:
            # no user
                if self.allow_authenticated:
                    return HttpResponseRedirect(self.get_unauthenticated_user_redirect(),status=HTTP_302_FOUND)
                return super().dispatch(request, *args, **kwargs)

        except Exception:
        # if something goes wrong
            return HttpResponseRedirect(self.get_unauthenticated_user_redirect())



class EnsureOwnProfileMixin(JWTUserAuthMixin):

    target_named_url = None

    def get_current_user_profile_url(self):
        return reverse_lazy(self.target_named_url, kwargs={"pk": self.request.user.profile.pk})

    def get_profile_or_none(self):
        try:
            return Profile.objects.get(pk=self.kwargs.get("pk"))
        except (Profile.DoesNotExist, ValueError, TypeError):
            return None

    def dispatch(self, request, *args, **kwargs):
        user = self.authenticate_and_assign_user(request)
        if user is None:
            return HttpResponseRedirect(reverse_lazy("login profile"))

        profile = self.get_profile_or_none()

        if profile is None or profile.user != user:
            return HttpResponseRedirect(self.get_current_user_profile_url())

        return super().dispatch(request, *args, **kwargs)