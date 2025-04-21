from django.contrib.auth.mixins import UserPassesTestMixin
from django.views import View


class NotAuthenticatedUser(UserPassesTestMixin):

    def __init__(self):
        self.request = None

    def test_func(self):
        return not self.request.user.is_authenticated

class OwnProfileAccessMixin(UserPassesTestMixin):

    def test_func(self):
        obj = self.get_object()
        return self.request.user.id == obj.user.id
