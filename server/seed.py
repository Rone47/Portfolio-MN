"""Seed sample data into Postgres (Neon) and MongoDB.

This is PLACEHOLDER content so the site isn't empty on first run — edit the
lists below with your real projects, skills, experience and blog posts,
then re-run:

    python seed.py
"""

import asyncio
import datetime

from sqlalchemy import delete

from app.db.mongodb import blog_collection
from app.db.postgres import AsyncSessionLocal, Base, engine
from app.models.postgres_models import Education, Experience, Project, Skill

SKILLS = [
    # name, category, proficiency
    ("Next.js", "Frontend", 90),
    ("React", "Frontend", 90),
    ("TypeScript", "Frontend", 85),
    ("Tailwind CSS", "Frontend", 88),
    ("Python", "Backend", 92),
    ("FastAPI", "Backend", 88),
    ("REST APIs", "Backend", 85),
    ("PostgreSQL", "Database", 82),
    ("MongoDB", "Database", 80),
    ("Docker", "DevOps", 75),
    ("Git & GitHub", "DevOps", 90),
    ("AWS", "DevOps", 65),
]

PROJECTS = [
    {
        "slug": "portfolio-site",
        "title": "This Portfolio",
        "summary": "A full-stack portfolio with a Next.js frontend and a Python FastAPI backend backed by two databases.",
        "description": (
            "Personal portfolio built to showcase projects, experience and writing. "
            "The frontend is Next.js + TypeScript + Tailwind CSS with Framer Motion "
            "animations. The backend is a FastAPI service that reads structured data "
            "(projects, skills, experience) from PostgreSQL on Neon, and flexible "
            "content (blog posts, contact messages) from MongoDB Atlas."
        ),
        "image_url": None,
        "project_url": None,
        "repo_url": None,
        "featured": True,
        "display_order": 0,
        "skills": ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "MongoDB"],
    },
    {
        "slug": "taskflow-api",
        "title": "TaskFlow API",
        "summary": "A task & project management REST API with auth, teams and webhooks.",
        "description": (
            "Sample project — replace with a real one. A FastAPI service exposing "
            "resources for teams, projects and tasks, with JWT auth and role-based "
            "access control, backed by PostgreSQL."
        ),
        "image_url": None,
        "project_url": None,
        "repo_url": None,
        "featured": True,
        "display_order": 1,
        "skills": ["Python", "FastAPI", "PostgreSQL", "REST APIs"],
    },
    {
        "slug": "realtime-chat",
        "title": "Realtime Chat App",
        "summary": "A WebSocket-based chat app with rooms, presence and message history.",
        "description": (
            "Sample project — replace with a real one. React front end talking to a "
            "FastAPI WebSocket backend, with chat history persisted in MongoDB for "
            "its flexible message/attachment schema."
        ),
        "image_url": None,
        "project_url": None,
        "repo_url": None,
        "featured": True,
        "display_order": 2,
        "skills": ["React", "TypeScript", "FastAPI", "MongoDB"],
    },
]

EXPERIENCE = [
    {
        "company": "Your Company / Freelance",
        "role": "Full-Stack Developer",
        "location": "Remote",
        "start_date": datetime.date(2023, 1, 1),
        "end_date": None,
        "description": "Sample entry — replace with your real experience.",
        "display_order": 0,
    },
]

EDUCATION = [
    {
        "school": "Your School",
        "degree": "B.Sc.",
        "field": "Computer Science",
        "start_date": datetime.date(2019, 9, 1),
        "end_date": datetime.date(2023, 6, 1),
        "description": "Sample entry — replace with your real education.",
        "display_order": 0,
    },
]

BLOG_POSTS = [
    {
        "slug": "hello-world",
        "title": "Hello, World — building this site",
        "excerpt": "Why I built my portfolio as a polyglot-persistence full-stack app.",
        "content": (
            "This is a sample post. Replace it with real writing. The short version: "
            "the frontend is Next.js, the API is FastAPI, structured data lives in "
            "Postgres (Neon) and flexible content lives in MongoDB."
        ),
        "tags": ["meta", "nextjs", "fastapi"],
        "cover_image": None,
        "published_at": datetime.datetime.now(datetime.UTC),
    },
]


async def seed_postgres() -> None:
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSessionLocal() as session:
        # Clear existing rows so this script is safely re-runnable.
        await session.execute(delete(Project))
        await session.execute(delete(Skill))
        await session.execute(delete(Experience))
        await session.execute(delete(Education))
        await session.commit()

        skills_by_name: dict[str, Skill] = {}
        for order, (name, category, proficiency) in enumerate(SKILLS):
            skill = Skill(name=name, category=category, proficiency=proficiency, display_order=order)
            session.add(skill)
            skills_by_name[name] = skill
        await session.flush()

        for item in PROJECTS:
            project = Project(
                slug=item["slug"],
                title=item["title"],
                summary=item["summary"],
                description=item["description"],
                image_url=item["image_url"],
                project_url=item["project_url"],
                repo_url=item["repo_url"],
                featured=item["featured"],
                display_order=item["display_order"],
                skills=[skills_by_name[name] for name in item["skills"]],
            )
            session.add(project)

        for item in EXPERIENCE:
            session.add(Experience(**item))

        for item in EDUCATION:
            session.add(Education(**item))

        await session.commit()

    print(f"Postgres: seeded {len(SKILLS)} skills, {len(PROJECTS)} projects, "
          f"{len(EXPERIENCE)} experience, {len(EDUCATION)} education rows.")


async def seed_mongo() -> None:
    await blog_collection.delete_many({"slug": {"$in": [p["slug"] for p in BLOG_POSTS]}})
    if BLOG_POSTS:
        await blog_collection.insert_many(BLOG_POSTS)
    print(f"MongoDB: seeded {len(BLOG_POSTS)} blog posts.")


async def main() -> None:
    await seed_postgres()
    await seed_mongo()


if __name__ == "__main__":
    asyncio.run(main())
