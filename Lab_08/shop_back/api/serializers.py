from rest_framework.serializers import ModelSerializer

from api.models import (
    Product,
    Category,
)


class CategoryBaseSerializer(ModelSerializer):

    class Meta:
        model: Category = Category
        fields: str = "__all__"


class ProductBaseSerializer(ModelSerializer):
    category: CategoryBaseSerializer = CategoryBaseSerializer()

    class Meta:
        model: Product = Product
        fields: str = "__all__"
