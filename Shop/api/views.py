import time

from django.contrib.auth import get_user_model
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView


from Shop.api.serializers import BookSerializer, GenreSerializer, CartSerializer, CartItemCreateSerializer, \
    CartItemUpdateSerializer, CartRetrieveSerializer, UserSerializer

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from Shop.api.serializers import CartItemListSerializer
from Shop.shop_app.models import Book, CartItem, Genre, Cart
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser

import jwt
import datetime


class CustomResponse(Response):

    def __init__(self,data=None,status_code=None,**kwargs):
        data = {
            'status_code': status_code,
            'data': data,
        }
        super().__init__(data, **kwargs)


class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


        # return CustomResponse(serializer.data, status_code=200)

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



    def destroy(self, request, *args, **kwargs):
        super().destroy(request,*args,**kwargs)
        cart_id = kwargs.get("cart_id_pk",None)
        cart = Cart.objects.get(id=cart_id)
        return Response({'new_total_price': cart.total_price}, status=200)


    def get_serializer_context(self):
        return {"cart_id": self.kwargs.get("cart_id_pk","")}


class BookReadOnlyViewSet(ReadOnlyModelViewSet):

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


User = get_user_model()

class Register(APIView):

    parser_classes = [MultiPartParser, FormParser,JSONParser]  # 👈 this is key


    def get(self,request):
        user = User.objects.all()
        serializer = UserSerializer(user,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


class LoginApiView(APIView):

    def post(self,request):

        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("User not found!")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password!")

        payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=10),
            "iat": datetime.datetime.utcnow()
        }

        token = jwt.encode(payload,'secret',algorithm='HS256')

        response = Response()
        response.set_cookie(key='jwt',value=token,httponly=True)

        response.data = {
            "jwt": token
        }
        return response


class UserAPIView(APIView):

    def get(self,request):

        token = request.COOKIES.get("jwt")

        if not token:
            raise AuthenticationFailed("Unauthenticated")

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated")

        user = User.objects.get(id=payload['id'])
        serializer = UserSerializer(user)

        return Response(serializer.data)


class LogoutApiView(APIView):

    def post(self,request):

        response = Response()
        response.delete_cookie("jwt")

        response.data = {
            'message': 'success'
        }

        return response


