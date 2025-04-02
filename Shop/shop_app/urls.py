from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from Shop.shop_app.views import home, BookDetailView, Products, FilteredList, AboutView, OrderView, todos, \
    session_json, delete_note, get_book_names

urlpatterns = [
    path('',AboutView.as_view(), name = 'home page' ),
    path('products/',Products.as_view(),name="products"),
    path('products/<int:pk>/', BookDetailView.as_view(), name="product detail"),
    path('products/<str:genre>/',FilteredList.as_view(),name="filtered products"),
    path('products/order', OrderView.as_view(), name= "order"),
    path('temp/',session_json,name="temp"),
    path('delete_note/',delete_note, name="DeleteNote"),
    path('get_book_names/',get_book_names,name="GetBookNames"),
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)