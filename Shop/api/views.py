from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.mixins import RetrieveModelMixin, CreateModelMixin, ListModelMixin, DestroyModelMixin
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from Shop.api.authentication import CookieJWTAuthentication
from Shop.api.serializers import BookSerializer, GenreSerializer, CartSerializer, CartItemCreateSerializer, \
    CartItemUpdateSerializer, CartRetrieveSerializer, CreateUserSerializer, EditUserSerializer, GetUserSerializer, \
    OrderSerializer, OrderItemSerializer, CreateOrderSerializer, TestUserSerializer

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet, GenericViewSet

from Shop.api.serializers import CartItemListSerializer
from Shop.shop_app.models import Book, CartItem, Genre, Cart, Order, OrderItems
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser

import datetime
from rest_framework import status

User = get_user_model()


# NO NEED OF RETRIEVE SINCE WE ONLY USE THE CURRENT CART
class CartViewSet(RetrieveModelMixin,ListModelMixin,GenericViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [AllowAny,]

#
class CartItemsViewSet(CreateModelMixin,
                   DestroyModelMixin,
                   ListModelMixin,
                   GenericViewSet):
    list_serializer = CartItemListSerializer
    create_serializer = CartItemCreateSerializer


    queryset = CartItem.objects.all()
    lookup_field = "id"
    parser_classes = [JSONParser, ]

    def get_serializer_class(self):
        if self.action == 'list':
            return self.list_serializer
        if self.request.method == 'POST':
            return self.create_serializer
        # if self.request.method in ['PUT', 'PATCH']:
        #     return self.update_serializer
        # if self.action == 'retrieve':
        #     return self.retrieve_serializer


    def get_queryset(self):
        old_queryset = super().get_queryset()
        new_queryset = old_queryset.filter(cart_id = self.kwargs["cart_pk"])
        return new_queryset


    def get_serializer_context(self):
        context = super().get_serializer_context()
        try:
            context["cart_id"] = self.kwargs["cart_pk"]
            return context
        except Exception:
            return context


class BookReadOnlyViewSet(ReadOnlyModelViewSet):
    authentication_classes = []

    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get_queryset(self):
        # genre = self.request.query_params.get("genre",None)
        # new_query = Book.objects.filter(genre__name=genre)
        # if new_query:
        #     return new_query
        # return self.queryset

        genre = self.request.query_params.get("genre")
        if genre:
            # Check if the genre exists in the database
            try:
                # Filter by genre name if it exists
                genre_obj = Genre.objects.get(name=genre)
                return Book.objects.filter(genre=genre_obj)
            except Genre.DoesNotExist:
                # If genre doesn't exist, you can either:
                # 1. Return an empty queryset
                return Book.objects.none()
                # 2. Or, raise a NotFound error with a custom message
                # raise NotFound(detail="Genre not found")
        # If no genre is provided, return all books
        return Book.objects.all()


class GenreReadOnlyViewSet(ReadOnlyModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = TokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        access = serializer.validated_data.get("access")
        refresh = serializer.validated_data.get("refresh")

        response = Response({"detail": "Login successful", "token": access, "refresh": refresh},
                            status=status.HTTP_200_OK)

        expires = datetime.datetime.utcnow() + datetime.timedelta(days=1)

        # HTTP SHOULD BE TRUE ???
        response.set_cookie(
            'token', access,
            httponly=True, secure=True, samesite='Lax', expires=expires
        )
        response.set_cookie(
            'refresh', refresh,
            httponly=True, secure=True, samesite='Lax', expires=expires
        )

        return response


# WILL NEED FOR LATER

class UserApiViewSet(CreateModelMixin,GenericViewSet):
    permission_classes = [AllowAny]
    authentication_classes = [CookieJWTAuthentication]

    serializer_class = CreateUserSerializer
    queryset = User.objects.all()


class LogoutApiView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        response = Response()
        response.delete_cookie("refresh")
        response.delete_cookie("token")

        response.data = {
            'message': 'success'
        }

        return response

class OrderViewSet(ListModelMixin,CreateModelMixin,GenericViewSet):

    queryset = Order.objects.all()

    def get_queryset(self):
        user = self.request.user
        old_query = super().get_queryset()
        if user.is_staff:
            return Order.objects.all()
        else:
            new_query = old_query.filter(owner=user)
            return new_query

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CreateOrderSerializer
        return OrderSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["user"] = self.request.user
        return context


# Not sure for that
class OrderItemsViewSet(ListModelMixin,GenericViewSet):

    serializer_class = OrderItemSerializer
    queryset = OrderItems.objects.all()


class CurrentUserViewSet(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]

    queryset = User.objects.all()
    create_user_serializer = CreateUserSerializer
    get_user_serializer = GetUserSerializer
    edit_user_serializer = EditUserSerializer

    def get_serializer_class(self):
        if self.request.method == "GET":
            return self.get_user_serializer
        if self.request.method == "POST":
            return self.create_user_serializer
        if self.request.method in ["PUT", "PATCH"]:
            return self.edit_user_serializer

    def get_object(self):
        return self.request.user




