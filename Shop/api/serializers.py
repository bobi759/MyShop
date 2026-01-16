from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.fields import ImageField
from rest_framework.serializers import ModelSerializer
from Shop.shop_app.models import Genre, Book, Cart, CartItem, Profile, Order, OrderItems, BookReview

User = get_user_model()



class ProfileSerializer(ModelSerializer):
    profile_picture = ImageField()

    class Meta:
        model = Profile
        fields = ("first_name", "last_name", "age", "profile_picture")


class CreateUserSerializer(ModelSerializer):
    profile = ProfileSerializer(many=False)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("id", "email", "password", "password2", "profile",)
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password = validated_data.pop('password')
        validated_data.pop('password2', None)

        user = User(**validated_data)
        user.set_password(password)
        user.save()
        cart = Cart.objects.create(user=user)
        cart.save()
        Profile.objects.create(user=user, **profile_data)
        return user

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2', None)

        profile_data = attrs.get('profile')

        if password != password2:
            raise serializers.ValidationError("Passwords do not match.")

        validate_password(password)
        profile_serializer = ProfileSerializer(data=profile_data)
        profile_serializer.is_valid(raise_exception=True)
        return attrs


class EditUserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(many=False)

    class Meta:
        model = User
        fields = ("id", "email", "profile")

    def update(self, instance, validated_data):
        profile_data = validated_data.pop("profile", {})
        instance.email = validated_data.get("email", instance.email)
        instance.save()
        profile = instance.profile
        profile.first_name = profile_data.get("first_name", profile.first_name)
        profile.last_name = profile_data.get("last_name", profile.last_name)
        profile.age = profile_data.get("age", profile.age)
        if profile_data.get("profile_picture"):
            profile.profile_picture = profile_data["profile_picture"]
        profile.save()
        return instance


class GetUserSerializer(serializers.ModelSerializer):
    cart_id = serializers.SerializerMethodField()
    profile = ProfileSerializer(many=False)

    class Meta:
        model = User
        fields = ("id", "email", "profile", "cart_id")

    def get_cart_id(self, obj):
        try:
            return obj.cart.id
        except Cart.DoesNotExist:
            return None


# Genre Serializer
class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"


# Book Serializer
class BookSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=False)

    class Meta:
        model = Book
        fields = "__all__"


# Cart Item : Retrieve, List, Create

class CartRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = "__all__"


class CartItemListSerializer(serializers.ModelSerializer):
    product = BookSerializer(many=False)
    subtotal = serializers.SerializerMethodField(method_name="total")

    class Meta:
        model = CartItem
        fields = ("id", "product", "quantity", "subtotal")

    @staticmethod
    def total(cart_item: CartItem):
        return cart_item.product.price * cart_item.quantity




class CartItemCreateSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField()

    class Meta:
        model = CartItem
        fields = ("id", "product_id", "quantity")

    def save(self, **kwargs):

        product_id = self.validated_data["product_id"]
        quantity = self.validated_data["quantity"]
        cart_id = self.context["cart_id"]

        try:
            cart_item = CartItem.objects.get(product_id=product_id, cart_id=cart_id)
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item
        except CartItem.DoesNotExist:
            self.instance = CartItem.objects.create(cart_id=cart_id, **self.validated_data)
        return self.instance


# Cart Serializer

class CartSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    items = CartItemListSerializer(many=True, read_only=True)
    grand_total = serializers.SerializerMethodField("final_total")

    class Meta:
        model = Cart
        fields = ("id", "items", "grand_total")

    @staticmethod
    def final_total(cart):
        return sum(item.product.price * item.quantity for item in cart.items.all())


# Order Item Serializer
class OrderItemSerializer(ModelSerializer):
    product = BookSerializer()

    class Meta:
        model = OrderItems
        fields = "__all__"


# Order Serializer
class CreateOrderSerializer(serializers.Serializer):
    cart_id = serializers.UUIDField()

    def validate_cart_id(self, value):
        try:
            cart = Cart.objects.prefetch_related('items').get(id=value)
        except Cart.DoesNotExist:
            raise serializers.ValidationError("Cart not found.")

        if not cart.items.exists():
            raise serializers.ValidationError("Cart is empty.")

        return value

    def save(self, **kwargs):
        cart_id = self.validated_data["cart_id"]
        user = self.context["user"]
        order = Order.objects.create(owner=user)
        cart = Cart.objects.get(id=cart_id)
        [OrderItems.objects.create(order=order, product=item.product, quantity=item.quantity) for item in cart.items.all()]
        order.save()
        cart.items.all().delete()
        return order


class ListOrderSerializer(ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ("id", "owner", "order_status", "placed_at", "items")


# Book Reviews Serializer
class ListBookReviewSerializer(ModelSerializer):
    book = BookSerializer()
    user = GetUserSerializer()

    class Meta:
        model = BookReview
        fields = ("id", "title", "description", "created_on", "user", "book")


# Book Review Serializer
class CreateBookReviewSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = ("id",)


class UserPostReviewSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("id",)


class BookReviewPostSerializer(ModelSerializer):
    book = CreateBookReviewSerializer
    user = UserPostReviewSerializer

    class Meta:
        model = BookReview
        fields = ("title", "description", "book", "user")
