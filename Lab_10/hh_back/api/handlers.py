from rest_framework.response import Response as DRF_Response

from typing import (
    Optional,
    Any,
)


class NoneDataHandler:
    """NoneDataHandler."""

    def get_none_response(
        self,
        object: Any,
        message: str,
        status: int
    ) -> Optional[DRF_Response]:
        """Handle none gotten object with response."""
        if not object:
            return DRF_Response(
                data={
                    "response": message
                },
                status=status
            )
        return None
