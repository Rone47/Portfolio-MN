from fastapi import APIRouter
from sqlalchemy import text

from app.db.mongodb import mongo_client
from app.db.postgres import engine

router = APIRouter(prefix="/api/health", tags=["health"])


@router.get("")
async def health_check():
    status = {"postgres": "unknown", "mongodb": "unknown"}

    try:
        async with engine.connect() as conn:
            await conn.execute(text("SELECT 1"))
        status["postgres"] = "ok"
    except Exception as exc:  # noqa: BLE001
        status["postgres"] = f"error: {exc}"

    try:
        await mongo_client.admin.command("ping")
        status["mongodb"] = "ok"
    except Exception as exc:  # noqa: BLE001
        status["mongodb"] = f"error: {exc}"

    return status
