# Generated by Django 4.2.19 on 2025-04-26 15:12

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_app', '0008_alter_cartitem_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='age',
            field=models.IntegerField(validators=[django.core.validators.MinValueValidator(0)]),
        ),
    ]
