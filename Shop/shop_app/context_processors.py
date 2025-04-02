from Shop.shop_app.models import Genre

def genres_context(request):
    return {"genres": Genre.objects.all()}