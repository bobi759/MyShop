from django.urls import path, include


from Shop.api.views import CartViewSet, BookReadOnlyViewSet, GenreReadOnlyViewSet, \
     LogoutApiView, MyObtainTokenPairView, UserApiViewSet
from Shop.api.views import CartItemsViewSet
from rest_framework_nested import routers


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, TokenVerifyView,
)

router = routers.SimpleRouter()
router.register(r'book',BookReadOnlyViewSet)

router.register(r'genre',GenreReadOnlyViewSet)
router.register(r'user', UserApiViewSet)

router.register(r'cart', CartViewSet)

cart_router = routers.NestedSimpleRouter(router, r'cart', lookup='cart_id')
cart_router.register(r'items', CartItemsViewSet)


urlpatterns = [
    path(r'', include(router.urls)),
    path(r'', include(cart_router.urls)),

    path("login/", MyObtainTokenPairView.as_view()),

    path("logout/",LogoutApiView.as_view()),

    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    # path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

]
