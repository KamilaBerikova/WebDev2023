from typing import (
    Any,
    Optional,
)

from django.db.models import QuerySet

from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.request import Request as DRF_Request
from rest_framework.response import Response as DRF_Response
from rest_framework import status

from api.models import (
    Product,
    Category,
)
from api.serializers import (
    ProductBaseSerializer,
    CategoryBaseSerializer,
)


class ProductViewSet(ViewSet):
    queryset: QuerySet[Product] = Product.objects.all()
    serializer_class: ProductBaseSerializer = ProductBaseSerializer
    permission_classes: tuple[Any] = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self) -> QuerySet:
        """Queryset method for ORM-request."""
        return self.queryset

    def get_instance(
        self,
        pk: int = 0,
    ) -> Optional[Product]:
        """Obtain the class instance by primary key."""
        compl_reason: Optional[Product] = None
        try:
            compl_reason = self.get_queryset().get(id=pk)
            return compl_reason
        except Product.DoesNotExist:
            return None

    def list(
        self,
        request: DRF_Request,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        serializer: ProductBaseSerializer = ProductBaseSerializer(
            instance=self.get_queryset(),
            many=True
        )
        response: DRF_Response = DRF_Response(
            data={
                "data": serializer.data
            },
            status=status.HTTP_200_OK
        )
        return response

    def retrieve(
        self,
        request: DRF_Request,
        pk: int = 0,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        product: Optional[Product] = self.get_instance(pk=pk)
        if not product:
            return DRF_Response(
                data={
                    "response": f"Продукт с id {pk} не найден"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer: ProductBaseSerializer = ProductBaseSerializer(
            instance=product,
            many=False
        )
        response: DRF_Response = DRF_Response(
            data=serializer.data,
            status=status.HTTP_200_OK
        )
        return response


class CategoryViewSet(ViewSet):
    queryset: QuerySet[Category] = Category.objects.all()
    serializer_class: CategoryBaseSerializer = CategoryBaseSerializer
    permission_classes: tuple[Any] = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self) -> QuerySet:
        """Queryset method for ORM-request."""
        return self.queryset

    def get_instance(
        self,
        pk: int = 0,
    ) -> Optional[Category]:
        """Obtain the class instance by primary key."""
        compl_reason: Optional[Category] = None
        try:
            compl_reason = self.get_queryset().get(id=pk)
            return compl_reason
        except Category.DoesNotExist:
            return None

    def list(
        self,
        request: DRF_Request,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        serializer: CategoryBaseSerializer = CategoryBaseSerializer(
            instance=self.get_queryset(),
            many=True
        )
        response: DRF_Response = DRF_Response(
            data={
                "data": serializer.data
            },
            status=status.HTTP_200_OK
        )
        return response

    def retrieve(
        self,
        request: DRF_Request,
        pk: int = 0,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        category: Optional[Category] = self.get_instance(pk=pk)
        if not category:
            return DRF_Response(
                data={
                    "response": f"Категория с id {pk} не найдена"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer: CategoryBaseSerializer = CategoryBaseSerializer(
            instance=category,
            many=False
        )
        response: DRF_Response = DRF_Response(
            data=serializer.data,
            status=status.HTTP_200_OK
        )
        return response

    @action(
        methods=["GET"],
        detail=True,
        url_path="products"
    )
    def get_products(
        self,
        request: DRF_Request,
        pk: int = 0,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        category: Optional[Category] = self.get_instance(pk=pk)
        if not category:
            return DRF_Response(
                data={
                    "response": f"Категория с id {pk} не найдена"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        # breakpoint()
        serializer: ProductBaseSerializer = ProductBaseSerializer(
            instance=category.products,
            many=True
        )
        response: DRF_Response = DRF_Response(
            data=serializer.data,
            status=status.HTTP_200_OK
        )
        return response
