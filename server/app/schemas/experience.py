import datetime

from pydantic import BaseModel, ConfigDict


class ExperienceOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    company: str
    role: str
    location: str | None
    start_date: datetime.date
    end_date: datetime.date | None
    description: str


class EducationOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    school: str
    degree: str
    field: str | None
    start_date: datetime.date
    end_date: datetime.date | None
    description: str
