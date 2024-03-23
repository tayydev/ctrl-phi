from typing import List, Optional

from fastapi import FastAPI, HTTPException

from pydantic import BaseModel

app = FastAPI()


class QueryModel(BaseModel):
    query: str
    content: str


class ResultModel(BaseModel):
    matched_text: str
    explanation: str


class ResponseModel(BaseModel):
    query: str
    results: Optional[List[ResultModel]]


def get_example_response(query: str) -> ResponseModel:
    if query == "why did he die":
        return ResponseModel(
            query=query,
            results=[
                ResultModel(
                    matched_text="A post mortem was held that evening which determined that he had died the previous day at the age of 41 with Cyanide poisoning cited as the cause of death.",
                    explanation="Sentence directly states historical cause of death"
                ),
                ResultModel(
                    matched_text="an alternative explanation for the cause of Turing's death: the accidental inhalation of cyanide fumes from an apparatus used to electroplate gold onto spoons",
                    explanation="This provides an alternative reason for death"
                ),
                ResultModel(
                    matched_text="It has been suggested that Turing's belief in fortune-telling may have caused his depressed mood.",
                    explanation="This provides a some potential causation for the death"
                ),
            ]
        )
    else:
        # TODO: More example queries?
        return ResponseModel(
            query=query,
            results=None
        )


@app.get("/api")
async def read_json(model: QueryModel):
    if model.query != "why did he die":
        raise HTTPException(status_code=500, detail="Endpoint not implemented. Try with query='why did he die'")

    return get_example_response(query=model.query)
