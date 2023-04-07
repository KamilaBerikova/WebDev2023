from rest_framework.serializers import ModelSerializer

from api.models import Company, Vacancy


class VacancyBaseModelSerializer(ModelSerializer):
    class Meta:
        model: Vacancy = Vacancy
        fields: str = "__all__"


class CompanyBaseModelSerializer(ModelSerializer):
    class Meta:
        model: Company = Company
        fields: str = "__all__"
