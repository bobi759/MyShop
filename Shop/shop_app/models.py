import time
import uuid

from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator
from django.db import models
import json
from django.db.models import CASCADE

# Create your models here.
User = get_user_model()

class Genre(models.Model):
    NAME_MAX_LENGTH = 30

    name = models.CharField(
        max_length=NAME_MAX_LENGTH,
    )

    def __str__(self):
        return self.name


class Book(models.Model):
    TITLE_MAX_LENGTH = 100

    AUTHOR_MAX_LENGTH = 100

    PRICE_MAX_DIGITS = 4
    PRICE_DECIMAL_PLACES = 2

    title = models.CharField(
        max_length=TITLE_MAX_LENGTH,
    )

    author = models.CharField(
        max_length= AUTHOR_MAX_LENGTH,
        default="P Diddy"
    )


    price = models.DecimalField(
        max_digits=PRICE_MAX_DIGITS,
        decimal_places=PRICE_DECIMAL_PLACES,
        validators=[
            MinValueValidator(0),
        ]
    )

    description = models.TextField()

    genre = models.ForeignKey(
        Genre,
        on_delete=models.CASCADE,
    )

    image = models.ImageField()

    def __str__(self):
        return self.title


class Profile(models.Model):

    FIRST_NAME_MAX_LENGTH = 50
    LAST_NAME_MAX_LENGTH = 50


    first_name = models.CharField(
        max_length= FIRST_NAME_MAX_LENGTH
    )

    last_name = models.CharField(
        max_length= LAST_NAME_MAX_LENGTH
    )

    age = models.IntegerField()

    profile_picture = models.ImageField()

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )


    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Cart(models.Model):

    id = models.UUIDField(default=uuid.uuid4,editable=False,primary_key=True)

    def __str__(self):
        return str(self.id)


class CartItem(models.Model):

    cart = models.ForeignKey(Cart,on_delete=models.CASCADE,related_name='items')
    product = models.ForeignKey(Book,on_delete=models.CASCADE,related_name='item_products')
    quantity = models.PositiveIntegerField(default=1)


    def __str__(self):
        return f"{self.product.title} added to {self.cart.id}"

