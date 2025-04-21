from rest_framework import serializers
from Shop.shop_app.models import Genre, Book, Cart, CartItem



class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"


class BookSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=False)


    class Meta:
        model = Book
        fields = "__all__"

# CART ITEMS SERIALIZERS


class CartRetrieveSerializer(serializers.ModelSerializer):

    class Meta:

        model = CartItem
        fields = "__all__"


class CartItemListSerializer(serializers.ModelSerializer):
    product = BookSerializer()
    subtotal = serializers.SerializerMethodField(method_name="total")

    class Meta:
        model = CartItem
        fields = ("id","product", "quantity", "subtotal")

    @staticmethod
    def total(cart_item: CartItem):
        return cart_item.product.price * cart_item.quantity

class CartItemCreateSerializer(serializers.ModelSerializer):

    product_id = serializers.IntegerField()

    class Meta:
        model = CartItem
        fields = ("id","product_id","quantity")

    def save(self, **kwargs):

        product_id = self.validated_data["product_id"]
        quantity = self.validated_data["quantity"]
        cart_id = self.context["cart_id"]

        try:
            cart_item = CartItem.objects.get(product_id = product_id, cart_id= cart_id)
            cart_item.quantity += quantity
            cart_item.save()
            self.instance = cart_item
        except CartItem.DoesNotExist:
            self.instance = CartItem.objects.create(cart_id=cart_id,**self.validated_data)
        return self.instance


class CartItemUpdateSerializer(serializers.ModelSerializer):


    class Meta:

        model = CartItem
        fields = "__all__"



# CART SERIALIZER

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

