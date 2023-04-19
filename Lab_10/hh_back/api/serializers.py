from rest_framework.serializers import (
    ModelSerializer,
    Serializer,
    CharField,
    FloatField,
    IntegerField,
)

from api.models import Company, Vacancy


class VacancyBaseModelSerializer(ModelSerializer):
    class Meta:
        model: Vacancy = Vacancy
        fields: str = "__all__"


class CompanyBaseModelSerializer(ModelSerializer):
    class Meta:
        model: Company = Company
        fields: str = "__all__"


class VacancyFunctionBaseSerializer(Serializer):
    name: CharField = CharField(max_length=200)
    description: CharField = CharField()
    salary: FloatField = FloatField()
    company_id: IntegerField = IntegerField()
