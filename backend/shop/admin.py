from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock', 'category',
                    'is_active', 'order_count', 'sell_count', 'created_at')
    list_filter = ('category', 'is_active', 'created_at')
    search_fields = ('name', 'category', 'tags')
    prepopulated_fields = {'slug': ('name',)}
