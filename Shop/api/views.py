from django.contrib.admin import action
from rest_framework import generics as generic_views, viewsets, status

from Shop.api.serializers import BookSerializer, GenreSerializer, CartSerializer, CartItemCreateSerializer, \
    CartItemUpdateSerializer, CartRetrieveSerializer

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from Shop.api.serializers import CartItemListSerializer
from Shop.shop_app.models import Book, CartItem, Genre, Cart
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser



class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartItemsViewSet(ModelViewSet):

    list_serializer = CartItemListSerializer
    create_serializer = CartItemCreateSerializer
    update_serializer = CartItemUpdateSerializer
    retrieve_serializer = CartRetrieveSerializer
    

    queryset = CartItem.objects.all()
    lookup_field = "id"
    parser_classes = [JSONParser,]

    def get_serializer_class(self):
        if self.action == 'list':
            return self.list_serializer
        if self.request.method == 'POST':
            return self.create_serializer
        if self.request.method in ['PUT','PATCH']:
            return self.update_serializer
        if self.action == 'retrieve':
            return self.retrieve_serializer


    def get_serializer_context(self):
        return {"cart_id": self.kwargs.get("cart_id_pk","")}


class BookReadOnlyViewSet(ReadOnlyModelViewSet):

    queryset = Book.objects.all()
    serializer_class = BookSerializer




