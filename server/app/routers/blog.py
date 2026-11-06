from fastapi import APIRouter, HTTPException

from app.db.mongodb import blog_collection
from app.schemas.blog import BlogPostOut

router = APIRouter(prefix="/api/blog", tags=["blog"])


@router.get("", response_model=list[BlogPostOut])
async def list_posts():
    cursor = blog_collection.find().sort("published_at", -1)
    posts = await cursor.to_list(length=200)
    for post in posts:
        post["_id"] = str(post["_id"])
    return posts


@router.get("/{slug}", response_model=BlogPostOut)
async def get_post(slug: str):
    post = await blog_collection.find_one({"slug": slug})
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    post["_id"] = str(post["_id"])
    return post
