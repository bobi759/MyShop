from django.views.generic import TemplateView
from Shop.api.authentication import FlexibleJWTAuthMixin


class AboutView(TemplateView):
    template_name = "shop/home.html"


#  SHOW PRODUCTS
class Products(TemplateView):
    template_name = "shop/products.html"


# BOOK DETAILS
class BookDetailView(FlexibleJWTAuthMixin, TemplateView):
    template_name = 'shop/book-details.html'


# ORDER VIEW
class OrderView(FlexibleJWTAuthMixin, TemplateView):
    template_name = "shop/order.html"
