from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers import blog, contact, experience, health, projects, skills

settings = get_settings()

app = FastAPI(title="Byrone Aketch — Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(projects.router)
app.include_router(skills.router)
app.include_router(experience.router)
app.include_router(blog.router)
app.include_router(contact.router)


@app.get("/")
async def root():
    return {"name": "Byrone Aketch — Portfolio API", "docs": "/docs"}
