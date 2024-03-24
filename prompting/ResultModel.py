from pydantic import BaseModel


class ResultModel(BaseModel):
    matched_text: str
    explanation: str
