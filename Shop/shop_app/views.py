from django.views.generic import TemplateView
from Shop.api.authentication import CustomJWTAuthMixin


class AboutView(TemplateView):
    template_name = "shop/home.html"



class Products(TemplateView):
    template_name = "shop/products.html"



class BookDetailView(CustomJWTAuthMixin, TemplateView):
    template_name = 'shop/book-details.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['book_id'] = self.kwargs['pk']
        return context


# ORDER VIEW
class OrderView(CustomJWTAuthMixin, TemplateView):
    allow_authenticated = True
    template_name = "shop/order.html"
