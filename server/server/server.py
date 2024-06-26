from fastapi import FastAPI, HTTPException

from models import QueryModel, ResponseModel, ResultModel
from starlette.middleware.cors import CORSMiddleware
from SearchAgent import SearchAgent

app = FastAPI()


# Configure CORS middleware with broad settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from all origins
    # Allow credentials (cookies, authorization headers)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

NUM_RESULTS = 3


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


@app.post("/realapi")
async def read_json(model: QueryModel):
    try:
        agent = SearchAgent(NUM_RESULTS)
        res = agent.search(reference_text=model.content, query=model.query)
        return res
    except Exception:
        return ResponseModel(query=model.query, results=[])


@app.post("/api")
async def get_json(model: QueryModel):
    if model.query != "why did he die":
        raise HTTPException(
            status_code=500, detail="Endpoint not implemented. Try with query='why did he die'")
    return get_example_response(query=model.query)
