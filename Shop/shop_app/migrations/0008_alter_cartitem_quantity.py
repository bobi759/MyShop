# Generated by Django 4.2.19 on 2025-04-11 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_app', '0007_alter_genre_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='quantity',
            field=models.PositiveIntegerField(default=1),
        ),
    ]
