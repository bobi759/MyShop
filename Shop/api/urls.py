from django.urls import path, include


from Shop.api.views import CartViewSet, BookReadOnlyViewSet, GenreReadOnlyViewSet, Register, LoginApiView, \
    UserAPIView, LogoutApiView
from Shop.api.views import CartItemsViewSet
from rest_framework_nested import routers

router = routers.SimpleRouter()
router.register(r'book',BookReadOnlyViewSet)

router.register(r'genre',GenreReadOnlyViewSet)

router.register(r'cart', CartViewSet)

cart_router = routers.NestedSimpleRouter(router, r'cart', lookup='cart_id')
cart_router.register(r'items', CartItemsViewSet)


urlpatterns = [
    path(r'', include(router.urls)),
    path(r'', include(cart_router.urls)),

    path("register/",Register.as_view()),

    path("login/",LoginApiView.as_view()),

    path("user/",UserAPIView.as_view()),

    path("logout/",LogoutApiView.as_view())


]
