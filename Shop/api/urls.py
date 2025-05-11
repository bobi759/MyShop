# from django.urls import path, include
#
#
# from Shop.api.views import CartViewSet, BookReadOnlyViewSet, GenreReadOnlyViewSet, \
#      LogoutApiView, MyObtainTokenPairView, UserApiViewSet
# from Shop.api.views import CartItemsViewSet
# from rest_framework_nested import routers
#
#
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView, TokenVerifyView,
# )
#
# router = routers.SimpleRouter()
# router.register(r'book',BookReadOnlyViewSet)
#
# router.register(r'genre',GenreReadOnlyViewSet)
# router.register(r'user', UserApiViewSet)
#
# router.register(r'cart', CartViewSet)
#
# cart_router = routers.NestedSimpleRouter(router, r'cart', lookup='cart_id')
# cart_router.register(r'items', CartItemsViewSet)
#
#
# urlpatterns = [
#     path(r'', include(router.urls)),
#     path(r'', include(cart_router.urls)),
#
#     path("login/", MyObtainTokenPairView.as_view()),
#
#     path("logout/",LogoutApiView.as_view()),
#
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#     # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#
#     # path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
#
# ]

from django.urls import path, include
from rest_framework_nested import routers
from Shop.api.views import (
    CartViewSet, BookReadOnlyViewSet, GenreReadOnlyViewSet,
    LogoutApiView, MyObtainTokenPairView, UserApiViewSet,
    CartItemsViewSet, OrderViewSet, CurrentUserViewSet, BookReviewsModelViewSet
)
from rest_framework_simplejwt.views import TokenRefreshView

# Base router
from django.urls import path, include
from rest_framework_nested import routers
from Shop.api.views import (
    CartViewSet, BookReadOnlyViewSet, GenreReadOnlyViewSet,
    LogoutApiView, MyObtainTokenPairView, UserApiViewSet,
    CartItemsViewSet
)
from rest_framework_simplejwt.views import TokenRefreshView

# Base router
router = routers.DefaultRouter()
router.register(r'genre', GenreReadOnlyViewSet)
router.register(r'user', UserApiViewSet)

# router.register(r'current-user',CurrentUserViewSet,basename='testing')

router.register(r'cart', CartViewSet, basename='cart')


cart_router = routers.NestedDefaultRouter(router,'cart',lookup="cart")
cart_router.register("items",CartItemsViewSet,basename='cart-items')


router.register(r'book', BookReadOnlyViewSet)
book_router = routers.NestedDefaultRouter(router,parent_prefix='book',lookup='book')
book_router.register("reviews",BookReviewsModelViewSet,basename='book-reviews')

router.register(r'order',OrderViewSet)





urlpatterns = [
    path('', include(router.urls)),
    path('', include(cart_router.urls)),
    path('',include(book_router.urls)),
    path('current-user/',CurrentUserViewSet.as_view()),

    # path('', include(user_cart_router.urls)),
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutApiView.as_view(), name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]