from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from Shop.shop_app.views import BookDetailView, Products, FilteredList, AboutView, OrderView

urlpatterns = [
    path('',AboutView.as_view(), name = 'home page' ),
    path('products/',Products.as_view(),name="products"),
    path('products/<int:pk>/', BookDetailView.as_view(), name="product detail"),
    path('products/<str:genre>/',FilteredList.as_view(),name="filtered products"),
    # path('products/order/', OrderView.as_view() ),
    path("product/order/",OrderView.as_view(),name='order products')

] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)