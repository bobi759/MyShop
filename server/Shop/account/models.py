from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, User, AbstractUser
from django.db import models

from Shop.account.managers import CustomManager


# Create your models here.

class CustomUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(
        unique=True,
    )
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    objects = CustomManager()

