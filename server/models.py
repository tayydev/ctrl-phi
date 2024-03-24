from pydantic import BaseModel
from typing import List, Optional


class QueryModel(BaseModel):
    query: str
    content: str


class ResultModel(BaseModel):
    matched_text: str
    explanation: str


class ResponseModel(BaseModel):
    query: str
    results: Optional[List[ResultModel]]
