from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.views.generic import DetailView, ListView, TemplateView
from django.http import JsonResponse
from django.core import serializers
from Shop.shop_app.models import Book, Genre
from django.core import serializers
import json

from random import randint


# Create your views here.

def home(request):
    return render(request, "shop/home.html")


class AboutView(TemplateView):
    template_name = "shop/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['genres'] = Genre.objects.all()
        return context


# def products(request):
#
#     books = Book.objects.all()
#     context = {
#         "books": books,
#     }
#     return render(request,"products.html",context)

class Products(ListView):
    model = Book
    template_name = "shop/products.html"
    context_object_name = "books"


class FilteredList(ListView):
    model = Book
    template_name = "shop/products.html"
    context_object_name = "books"

    def get_queryset(self):
        return Book.objects.filter(genre__name=self.kwargs.get('genre'))


class BookDetailView(LoginRequiredMixin, DetailView):
    model = Book
    template_name = 'shop/book-details.html'

    def post(self, request, *args, **kwargs):
        obj = self.get_object()
        serialized_obj = serializers.serialize('json', [obj, ])

        if "products" not in self.request.session:
            self.request.session["products"] = {}
        self.request.session["products"][obj.id] = serialized_obj

        self.request.session.modified = True
        return redirect("products")


class OrderView(LoginRequiredMixin, TemplateView):
    template_name = "shop/order.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        book_ids = self.request.session.get("products", [])
        books = Book.objects.filter(id__in=book_ids)
        context["books"] = books
        return context


def todos(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    breakpoint()
    if is_ajax:
        return redirect("home page")


#
# class AjaxHandler(View):
#
#     def get(self,request):
#
#         if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
#             number = randint(1, 10)
#
#             return JsonResponse({"number":number})
#         return render(request,"shop/temp.html")
#

def session_json(request):
    # return JsonResponse(request.session.get("products"))
    return render(request,'shop/temp.html')


def get_book_names(request):
    data = serializers.serialize('json',Book.objects.all())
    return JsonResponse(data, safe=False)

def delete_note(request):
    delete_id = request.GET.get("delete_id")
    # book = Book.objects.get(id=delete_id)
    # request.session["products"].pop(delete_id,None)

    request.session["products"].pop(delete_id, None)
    request.session.modified = True
    print(request.session["products"])
    # print(book.title)
    return JsonResponse(
        {"status": "1", "status_message": "Successfully deleted book", "products": request.session["products"]})
    # return HttpResponse("im okay")
