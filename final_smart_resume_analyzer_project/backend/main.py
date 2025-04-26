from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import spacy

app = FastAPI()

# Allow CORS for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load small English NLP model
nlp = spacy.load("en_core_web_sm")

class AnalyzeRequest(BaseModel):
    resume_text: str
    job_description: str
    domain: str

class AnalysisResult(BaseModel):
    matching_score: int
    missing_skills: List[str]
    domain_recommendation: str

def preprocess_text(text: str) -> List[str]:
    """Preprocess text: lowercase, remove stopwords, lemmatize"""
    doc = nlp(text.lower())
    processed = [token.lemma_ for token in doc if token.is_alpha and not token.is_stop]
    return processed

@app.post("/analyze", response_model=AnalysisResult)
async def analyze_resume(data: AnalyzeRequest):
    resume_tokens = set(preprocess_text(data.resume_text))
    job_tokens = set(preprocess_text(data.job_description))

    common_tokens = resume_tokens.intersection(job_tokens)
    matching_score = int(len(common_tokens) / max(len(job_tokens), 1) * 100)

    missing_skills = list(job_tokens - resume_tokens)
    recommended_domain = data.domain if data.domain else "General"

    return AnalysisResult(
        matching_score=matching_score,
        missing_skills=missing_skills[:5],
        domain_recommendation=recommended_domain
    )