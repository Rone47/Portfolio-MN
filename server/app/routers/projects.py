from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.db.postgres import get_db
from app.models.postgres_models import Project
from app.schemas.project import ProjectOut

router = APIRouter(prefix="/api/projects", tags=["projects"])


@router.get("", response_model=list[ProjectOut])
async def list_projects(featured_only: bool = False, db: AsyncSession = Depends(get_db)):
    stmt = select(Project).options(selectinload(Project.skills)).order_by(Project.display_order)
    if featured_only:
        stmt = stmt.where(Project.featured.is_(True))
    result = await db.execute(stmt)
    return result.scalars().all()


@router.get("/{slug}", response_model=ProjectOut)
async def get_project(slug: str, db: AsyncSession = Depends(get_db)):
    stmt = (
        select(Project)
        .options(selectinload(Project.skills))
        .where(Project.slug == slug)
    )
    result = await db.execute(stmt)
    project = result.scalar_one_or_none()
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return project
