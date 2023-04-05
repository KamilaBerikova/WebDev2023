from django.db.models import (
    Model,
    CharField,
    FloatField,
    IntegerField,
    TextField,
    BooleanField,
    ForeignKey,
    PROTECT,
)


class Category(Model):
    NAME_LEN = 150
    name = CharField(
        max_length=NAME_LEN,
        verbose_name="наименование",
        unique=True,
        db_index=True,
    )

    class Meta:
        verbose_name: str = "Категория"
        verbose_name_plural: str = "Категории"
        ordering: tuple[str] = ("id",)

    def __str__(self) -> str:
        return self.name


class Product(Model):
    PRODUCT_MAX_NAME = 150

    name = CharField(
        max_length=PRODUCT_MAX_NAME,
        verbose_name="наименование",
        unique=True,
        db_index=True
    )
    price = FloatField(
        verbose_name="Цена"
    )
    description = TextField(
        blank=True,
        null=True,
        verbose_name="Описание"
    )
    count = IntegerField(
        verbose_name="Количество",
        default=0
    )
    is_active = BooleanField(
        verbose_name="Активность товара",
        default=True
    )
    category = ForeignKey(
        to=Category,
        on_delete=PROTECT,
        related_name="products"
    )

    class Meta:
        verbose_name: str = "Продукт"
        verbose_name_plural: str = "Продукты"
        ordering: tuple[str] = ("-id", "name",)

    def __str__(self) -> str:
        return f"Продукт {self.name}"
