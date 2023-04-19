from django.db.models import (
    Model,
    CharField,
    TextField,
    FloatField,
    ForeignKey,
    PROTECT,
)


class Company(Model):
    name: CharField = CharField(
        max_length=150,
        unique=True,
        db_index=True,
        verbose_name="Наименование"
    )
    description: TextField = TextField(verbose_name="Описание")
    city: CharField = CharField(max_length=50)
    address: TextField = TextField(verbose_name="Адресс")

    class Meta:
        verbose_name: str = "Компания"
        verbose_name_plural: str = "Компании"
        ordering: tuple[str] = ("-id",)

    def __str__(self) -> str:
        return self.name


class Vacancy(Model):
    name: CharField = CharField(
        verbose_name="Имя вакансии",
        max_length=150
    )
    description: TextField = TextField(
        verbose_name="Описание вакансии"
    )
    salary: FloatField = FloatField(
        verbose_name="Заработная плата"
    )
    company: ForeignKey = ForeignKey(
        to=Company,
        on_delete=PROTECT,
        related_name="vacancies",
        verbose_name="Компания"
    )

    class Meta:
        verbose_name: str = "Вакансия"
        verbose_name_plural: str = "Вакансии"
        ordering: tuple[str] = ("-id",)

    def __str__(self) -> str:
        return self.name
