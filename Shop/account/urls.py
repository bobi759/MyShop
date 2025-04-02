from django.contrib.auth.views import LogoutView
from django.urls import path

from Shop.account.views import CreateProfile, LoginUser, LogoutUser, EditProfile, ProfileDetails, DeleteProfile

urlpatterns = [
    path("register/", CreateProfile.as_view(), name='create profile'),
    path("login/", LoginUser.as_view(), name='login profile'),

    path("logout/", LogoutUser.as_view(), name='logout profile'),

    path("edit/<int:pk>/", EditProfile.as_view(), name='edit profile'),

    path("details/<int:pk>/", ProfileDetails.as_view(), name='profile details'),

    path("delete/<int:pk>/",DeleteProfile.as_view(), name = 'delete profile'),

]
