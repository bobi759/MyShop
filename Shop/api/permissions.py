from rest_framework.permissions import BasePermission


class RestrictApiPermission(BasePermission):
    admin_methods = {'GET', 'POST', 'PUT', 'PATCH', 'DELETE'}
    authenticated_methods = {'GET', 'POST'}
    unauthenticated_methods = {'GET'}

    def has_permission(self, request, view):
        user = request.user
        method = request.method.upper()

        if user and user.is_staff:
            return method in self.admin_methods
        elif user and user.is_authenticated:
            return method in self.authenticated_methods
        else:
            return method in self.unauthenticated_methods
