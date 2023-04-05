from django.contrib.admin import (
    register,
    ModelAdmin,
)

from api.models import (
    Category,
    Product,
)


@register(Category)
class CategoryAdmin(ModelAdmin):
    ...


@register(Product)
class ProductAdmin(ModelAdmin):
    ...
