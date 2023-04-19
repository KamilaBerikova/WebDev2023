from typing import Optional

from django.db.models import (
    Model,
    QuerySet,
)


class ModelInstanceMixin:
    """Mixin for getting instance that are inherited from Model."""

    def get_queryset_instance_by_id(
        self,
        class_name: Model,
        queryset: QuerySet,
        pk: int = 0,
    ) -> Optional[Model]:
        """Get class instance by PK with provided queryset."""
        obj: Optional[Model] = None
        try:
            obj = queryset.get(pk=pk)
            return obj
        except class_name.DoesNotExist:
            return None
