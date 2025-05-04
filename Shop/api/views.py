from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from urllib3 import Retry

from Shop.api.authentication import CookieJWTAuthentication
from Shop.api.serializers import BookSerializer, GenreSerializer, CartSerializer, CartItemCreateSerializer, \
    CartItemUpdateSerializer, CartRetrieveSerializer, CreateUserSerializer, EditUserSerializer

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from Shop.api.serializers import CartItemListSerializer
from Shop.shop_app.models import Book, CartItem, Genre, Cart
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser

import datetime
from rest_framework import status

User = get_user_model()


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
    parser_classes = [JSONParser, ]

    def get_serializer_class(self):
        if self.action == 'list':
            return self.list_serializer
        if self.request.method == 'POST':
            return self.create_serializer
        if self.request.method in ['PUT', 'PATCH']:
            return self.update_serializer
        if self.action == 'retrieve':
            return self.retrieve_serializer

    def destroy(self, request, *args, **kwargs):
        super().destroy(request, *args, **kwargs)
        cart_id = kwargs.get("cart_id_pk", None)
        cart = Cart.objects.get(id=cart_id)
        return Response({'new_total_price': cart.total_price}, status=200)

    def get_serializer_context(self):
        return {"cart_id": self.kwargs.get("cart_id_pk", "")}


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
            httponly=False, secure=True, samesite='Lax', expires=expires
        )
        response.set_cookie(
            'refresh', refresh,
            httponly=False, secure=True, samesite='Lax', expires=expires
        )

        return response


# WILL NEED FOR LATER

class UserApiViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = [CookieJWTAuthentication]

    queryset = User.objects.all()
    create_user_serializer = CreateUserSerializer
    edit_user_serializer = EditUserSerializer

    def get(self, request):
        user = request.user
        serializer = CreateUserSerializer(user)
        return Response(serializer.data)

    def get_serializer_class(self):
        if self.request.method == "GET":
            return self.create_user_serializer
        if self.request.method == "POST":
            return self.create_user_serializer
        if self.request.method in ["PUT", "PATCH"]:
            return self.edit_user_serializer


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
