import datetime

from pydantic import BaseModel, Field


class BlogPostOut(BaseModel):
    id: str = Field(alias="_id")
    slug: str
    title: str
    excerpt: str
    content: str
    tags: list[str] = []
    cover_image: str | None = None
    published_at: datetime.datetime

    model_config = {"populate_by_name": True}
