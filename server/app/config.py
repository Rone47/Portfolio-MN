from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Central app config, loaded from environment / .env."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str
    mongodb_uri: str
    mongodb_db_name: str = "portfolio"
    cors_origins: str = "http://localhost:3000"
    environment: str = "development"

    @property
    def async_database_url(self) -> str:
        """Neon connection string, rewritten for SQLAlchemy + asyncpg.

        asyncpg doesn't understand the `sslmode`/`channel_binding` query
        params Neon includes by default, so SSL is passed via connect_args
        instead (see app/db/postgres.py).
        """
        url = self.database_url
        if url.startswith("postgresql://"):
            url = "postgresql+asyncpg://" + url[len("postgresql://") :]
        elif url.startswith("postgres://"):
            url = "postgresql+asyncpg://" + url[len("postgres://") :]
        return url.split("?", 1)[0]

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
