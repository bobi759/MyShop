import os
import django
from bs4 import BeautifulSoup
import requests
# from transliterate import translit

#
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Shop.settings")
django.setup()

from Shop.shop_app.models import Book


book_category_page = "https://www.netflix.com/bg/"
# MEDIA_DIR = r"C:\Users\User\Shop\server\media"

html_text = requests.get(book_category_page).text
soup = BeautifulSoup(html_text, 'lxml')


print(soup)





# book_urls = soup.find_all("a", class_="product-box")
#
#
# valid_book_goal = 30
# valid_book_count = 0
# for url in book_urls:
#
#     book_details_rul = url['href']
#     r = requests.get(book_details_rul).text
#     soup_1 = BeautifulSoup(r, 'lxml')
#
#     table = soup_1.find("table", class_="stylized attributes")
#
#     # English book name - adding only foreign books
#
#     last_row = table.find_all("tr")[-2]
#
#     original_english_name_category = last_row.find("th").get_text(strip=True)
#     if not original_english_name_category == "Оригинално име":
#         continue
#     english_name_real = last_row.find("td").get_text(strip=True)
#
#     # Book image
#
#     gallery = soup_1.find("div", class_="gallery-box")
#
#     link_tag = gallery.find("link")
#     image_url = link_tag["href"]
#     my_img = requests.get(image_url).content
#
#     book_image_name = english_name_real.replace(" ", "-")
#     file_path = os.path.join(MEDIA_DIR, f"{book_image_name}.jpg")
#
#     with open(file_path, "wb") as f:
#         f.write(my_img)
#
#     # Author
#
#     author_name = None
#     author_row = None
#     for tr in table.find_all("tr"):
#         th = tr.find("th")
#         if th and "Автор" in th.get_text(strip=True):
#             author_row = tr
#     #
#     if author_row:
#         td = author_row.find("td")
#         if td:
#             author_name = td.get_text(strip=True)
#             if len(author_name.split(' ')) == 2:
#                 author_name = translit(author_name, 'bg', reversed=True)
#
#     # price tag
#     price = None
#     price_span = soup_1.select_one("span.regular-price span.price")
#     if price_span:
#         integer_part = price_span.contents[0].strip()
#         price = int(integer_part)
#
#     print(f"Book name: {english_name_real}, Author: {author_name} with image id {valid_book_count} and price {price}")
#
#     b = Book.objects.create(
#         title=english_name_real,
#         price=price,
#         description="bla bla bla",
#         image=f"{book_image_name}.jpg",
#         genre_id=25,
#         author=author_name,
#         rating=0,
#     )
#     b.save()
#
#     if valid_book_count == valid_book_goal:
#         break
#     valid_book_count += 1
