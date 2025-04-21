from django.urls import path, include
from rest_framework import routers
from Shop.api.views import CartViewSet, BookReadOnlyViewSet
from Shop.api.views import CartItemsViewSet
from rest_framework_nested import routers

router = routers.SimpleRouter()
router.register(r'book',BookReadOnlyViewSet)
router.register(r'cart', CartViewSet)



cart_router = routers.NestedSimpleRouter(router, r'cart', lookup='cart_id')
cart_router.register(r'items', CartItemsViewSet)

#
# router = routers.DefaultRouter()
#
# # router.register(r'cart', CartSetViewSet, basename='cart_view')
# router.register(r'items', CartItemsViewSet, basename='cart_view')
#
# router.register(r'books', BookViewSet, basename='book_view')


urlpatterns = [
    path(r'', include(router.urls)),
    path(r'', include(cart_router.urls)),


]
