from django import template

from Shop.shop_app.models import Genre

register = template.Library()


# @register.simple_tag
# def any_function():
#     return Book.objects.count


@register.inclusion_tag('base.html')
def my_custom_tag():
    genres = Genre.objects.all()
    return {
        "genres": genres
    }