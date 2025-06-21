from django.db import models
from django.utils.text import slugify


class Product(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    stock = models.IntegerField()
    image_url = models.URLField()
    category = models.CharField(max_length=100)
    # list of color strings
    colors = models.JSONField(default=list, blank=True)
    tags = models.CharField(max_length=255, blank=True)
    rating = models.FloatField(default=0.0)
    num_reviews = models.PositiveIntegerField(default=0)
    order_count = models.PositiveIntegerField(default=0)
    sell_count = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
