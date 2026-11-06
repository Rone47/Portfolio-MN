from pydantic import BaseModel, ConfigDict

from app.schemas.skill import SkillOut


class ProjectOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    slug: str
    title: str
    summary: str
    description: str
    image_url: str | None
    project_url: str | None
    repo_url: str | None
    featured: bool
    skills: list[SkillOut] = []
