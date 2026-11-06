from __future__ import annotations

import datetime

from sqlalchemy import Boolean, Column, Date, ForeignKey, Integer, String, Table, Text, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.postgres import Base

# Many-to-many join between projects and the skills used to build them.
project_skills = Table(
    "project_skills",
    Base.metadata,
    Column("project_id", ForeignKey("projects.id", ondelete="CASCADE"), primary_key=True),
    Column("skill_id", ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True),
)


class Skill(Base):
    __tablename__ = "skills"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)
    category: Mapped[str] = mapped_column(String(40), nullable=False)  # e.g. Frontend, Backend, Database, DevOps
    proficiency: Mapped[int] = mapped_column(Integer, default=80)  # 0-100
    display_order: Mapped[int] = mapped_column(Integer, default=0)

    projects: Mapped[list["Project"]] = relationship(
        secondary=project_skills, back_populates="skills"
    )


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    slug: Mapped[str] = mapped_column(String(120), unique=True, nullable=False, index=True)
    title: Mapped[str] = mapped_column(String(160), nullable=False)
    summary: Mapped[str] = mapped_column(String(300), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False, default="")
    image_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    project_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    repo_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    featured: Mapped[bool] = mapped_column(Boolean, default=False)
    display_order: Mapped[int] = mapped_column(Integer, default=0)
    created_at: Mapped[datetime.datetime] = mapped_column(server_default=func.now())

    skills: Mapped[list["Skill"]] = relationship(
        secondary=project_skills, back_populates="projects"
    )


class Experience(Base):
    __tablename__ = "experience"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    company: Mapped[str] = mapped_column(String(160), nullable=False)
    role: Mapped[str] = mapped_column(String(160), nullable=False)
    location: Mapped[str | None] = mapped_column(String(160), nullable=True)
    start_date: Mapped[datetime.date] = mapped_column(Date, nullable=False)
    end_date: Mapped[datetime.date | None] = mapped_column(Date, nullable=True)  # None = current
    description: Mapped[str] = mapped_column(Text, default="")
    display_order: Mapped[int] = mapped_column(Integer, default=0)


class Education(Base):
    __tablename__ = "education"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    school: Mapped[str] = mapped_column(String(160), nullable=False)
    degree: Mapped[str] = mapped_column(String(160), nullable=False)
    field: Mapped[str | None] = mapped_column(String(160), nullable=True)
    start_date: Mapped[datetime.date] = mapped_column(Date, nullable=False)
    end_date: Mapped[datetime.date | None] = mapped_column(Date, nullable=True)
    description: Mapped[str] = mapped_column(Text, default="")
    display_order: Mapped[int] = mapped_column(Integer, default=0)
