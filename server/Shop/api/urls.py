from django.urls import path, include
from rest_framework_nested import routers
from Shop.api.views import (
    CartViewSet, BookReadOnlyViewSet, GenreReadOnlyViewSet,
    LogoutApiView, MyObtainTokenPairView, UserApiViewSet,
    CartItemsViewSet, OrderViewSet, CurrentUserViewSet, BookReviewsModelViewSet
)

router = routers.DefaultRouter()
router.register(r'user', UserApiViewSet)

router.register(r'genre', GenreReadOnlyViewSet)

router.register(r'order',OrderViewSet)

router.register(r'cart', CartViewSet, basename='cart')


cart_router = routers.NestedDefaultRouter(router,'cart',lookup='cart')
cart_router.register("items",CartItemsViewSet,basename='cart-items')


router.register(r'book', BookReadOnlyViewSet)
book_router = routers.NestedDefaultRouter(router,parent_prefix='book',lookup='book')
book_router.register("reviews",BookReviewsModelViewSet,basename='book-reviews')



urlpatterns = [
    path('', include(router.urls)),
    path('', include(cart_router.urls)),
    path('',include(book_router.urls)),
    path('current-user/',CurrentUserViewSet.as_view()),

    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutApiView.as_view(), name='logout'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]