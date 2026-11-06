from motor.motor_asyncio import AsyncIOMotorClient

from app.config import get_settings

settings = get_settings()

mongo_client = AsyncIOMotorClient(settings.mongodb_uri)
mongo_db = mongo_client[settings.mongodb_db_name]

# Flexible/document-shaped collections live here — content that doesn't
# need relational integrity but benefits from a loose, evolving schema.
blog_collection = mongo_db["blog_posts"]
contact_collection = mongo_db["contact_messages"]
analytics_collection = mongo_db["analytics_events"]
