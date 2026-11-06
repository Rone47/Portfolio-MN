from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.postgres import get_db
from app.models.postgres_models import Education, Experience
from app.schemas.experience import EducationOut, ExperienceOut

router = APIRouter(prefix="/api", tags=["experience"])


@router.get("/experience", response_model=list[ExperienceOut])
async def list_experience(db: AsyncSession = Depends(get_db)):
    stmt = select(Experience).order_by(Experience.display_order)
    result = await db.execute(stmt)
    return result.scalars().all()


@router.get("/education", response_model=list[EducationOut])
async def list_education(db: AsyncSession = Depends(get_db)):
    stmt = select(Education).order_by(Education.display_order)
    result = await db.execute(stmt)
    return result.scalars().all()
