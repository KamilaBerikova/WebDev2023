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
    Company,
    Vacancy,
)
from api.serializers import (
    CompanyBaseModelSerializer,
    VacancyBaseModelSerializer,
)


class CompanyViewSet(ViewSet):
    queryset: QuerySet[Company] = Company.objects.all()
    serializer_class: CompanyBaseModelSerializer = CompanyBaseModelSerializer
    permission_classes: tuple[Any] = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self) -> QuerySet:
        """Queryset method for ORM-request."""
        return self.queryset

    def get_instance(
        self,
        pk: int = 0,
    ) -> Optional[Company]:
        """Obtain the class instance by primary key."""
        compl_reason: Optional[Company] = None
        try:
            compl_reason = self.get_queryset().get(id=pk)
            return compl_reason
        except Company.DoesNotExist:
            return None

    def list(
        self,
        request: DRF_Request,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        serializer: CompanyBaseModelSerializer = CompanyBaseModelSerializer(
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
        company: Optional[Company] = self.get_instance(pk=pk)
        if not company:
            return DRF_Response(
                data={
                    "response": f"Компания с id {pk} не найдена"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer: CompanyBaseModelSerializer = CompanyBaseModelSerializer(
            instance=company,
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
        url_path="vacancies"
    )
    def get_products(
        self,
        request: DRF_Request,
        pk: int = 0,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        company: Optional[Company] = self.get_instance(pk=pk)
        if not company:
            return DRF_Response(
                data={
                    "response": f"Компания с id {pk} не найдена"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer: VacancyBaseModelSerializer = VacancyBaseModelSerializer(
            instance=company.vacancies.all(),
            many=True
        )
        response: DRF_Response = DRF_Response(
            data=serializer.data,
            status=status.HTTP_200_OK
        )
        return response


class VacancyViewSet(ViewSet):
    queryset: QuerySet[Vacancy] = Vacancy.objects.all()
    serializer_class: VacancyBaseModelSerializer = VacancyBaseModelSerializer
    permission_classes: tuple[Any] = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self) -> QuerySet:
        """Queryset method for ORM-request."""
        return self.queryset

    def get_instance(
        self,
        pk: int = 0,
    ) -> Optional[Vacancy]:
        """Obtain the class instance by primary key."""
        compl_reason: Optional[Vacancy] = None
        try:
            compl_reason = self.get_queryset().get(id=pk)
            return compl_reason
        except Vacancy.DoesNotExist:
            return None

    def list(
        self,
        request: DRF_Request,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        serializer: VacancyBaseModelSerializer = VacancyBaseModelSerializer(
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
        category: Optional[Vacancy] = self.get_instance(pk=pk)
        if not category:
            return DRF_Response(
                data={
                    "response": f"Вакансии с id {pk} не существует"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer: VacancyBaseModelSerializer = VacancyBaseModelSerializer(
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
        detail=False,
        url_path="top_ten"
    )
    def get_products(
        self,
        request: DRF_Request,
        pk: int = 0,
        *args: tuple[Any],
        **kwargs: dict[str, Any]
    ) -> DRF_Response:
        serializer: VacancyBaseModelSerializer = VacancyBaseModelSerializer(
            instance=self.get_queryset().order_by("-salary")[:10],
            many=True
        )
        response: DRF_Response = DRF_Response(
            data={
                "data": serializer.data
            },
            status=status.HTTP_200_OK
        )
        return response
