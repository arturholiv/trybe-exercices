from fastapi import FastAPI, Query, Query
from text_analyzer import text_analyzer

app = FastAPI()


@app.get("/")
def get_text_info(input_text: str = Query(def))
    return text_analyzer(input_text)