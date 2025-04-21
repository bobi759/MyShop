from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.views.generic import DetailView, ListView, TemplateView


from Shop.shop_app.models import Book, Genre



# SHOW HOME
class AboutView(TemplateView):
    template_name = "shop/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['genres'] = Genre.objects.all()
        return context


#  SHOW PRODUCTS
class Products(ListView):
    model = Book
    template_name = "shop/products.html"
    context_object_name = "books"


# FILTER PRODUCTS
class FilteredList(ListView):
    model = Book
    template_name = "shop/products.html"
    context_object_name = "books"

    def get_queryset(self):
        return Book.objects.filter(genre__name=self.kwargs.get('genre'))

# BOOK DETAILS
class BookDetailView(LoginRequiredMixin, DetailView):
    model = Book
    template_name = 'shop/book-details.html'

    def post(self, request, *args, **kwargs):
        obj = self.get_object()

        if "products" not in self.request.session:
            self.request.session["products"] = []
        self.request.session["products"].append(obj.id)

        self.request.session.modified = True
        return redirect("products")


# ORDER VIEW
class OrderView(LoginRequiredMixin, TemplateView):
    template_name = "shop/order.html"











