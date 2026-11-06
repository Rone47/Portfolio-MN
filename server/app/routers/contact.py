import datetime

from fastapi import APIRouter

from app.db.mongodb import contact_collection
from app.schemas.contact import ContactMessageIn, ContactMessageOut

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("", response_model=ContactMessageOut)
async def send_message(payload: ContactMessageIn):
    doc = payload.model_dump()
    doc["created_at"] = datetime.datetime.now(datetime.UTC)
    doc["read"] = False
    await contact_collection.insert_one(doc)
    return ContactMessageOut(success=True, message="Thanks — I'll get back to you soon.")
