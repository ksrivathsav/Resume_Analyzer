# # 🧠 Smart Resume Analyzer

Smart Resume Analyzer is a full-stack web application that allows users to upload resumes and input job descriptions, analyzing them to provide skill matching scores and recommendations.  
It uses lightweight NLP preprocessing for smarter keyword matching.

---

## 🚀 Tech Stack

- **Frontend**: React.js (TypeScript), Vite, TailwindCSS
- **Backend**: FastAPI, SpaCy NLP
- **DevOps**: Docker, Docker Compose, GitHub Actions, Render.com

---

## 🏗️ System Architecture

Frontend (React + Vite + TailwindCSS)
↓ REST API Call
Backend (FastAPI + SpaCy NLP)
↓ (optional future)
Database (MongoDB / PostgreSQL)

---

## ✨ Key Features

- Upload resumes and job descriptions
- Intelligent skill matching using SpaCy NLP preprocessing
- Missing skill recommendation
- Fully dockerized setup for frontend and backend
- CI/CD automation with GitHub Actions (optional)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/smart-resume-analyzer.git
cd smart-resume-analyzer
```

### 2. Install SpaCy Model (Locally Only)
```bash
pip install spacy
python -m spacy download en_core_web_sm
```

### 3. Run with Docker Compose
```bash
docker-compose up --build
```
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

> Make sure you have Docker and Docker Compose installed.

---

## 📡 API Information (FastAPI Backend)

| Method | Endpoint | Description |
|:---|:---|:---|
| POST | `/analyze` | Analyzes resume text and job description |

### Sample Request Body:
```json
{
  "resume_text": "Python developer skilled in machine learning and data science.",
  "job_description": "Looking for a Python and TensorFlow expert.",
  "domain": "Software Engineering"
}
```

### Sample Response:
```json
{
  "matching_score": 50,
  "missing_skills": ["tensorflow"],
  "domain_recommendation": "Software Engineering"
}
```

---

## 🚀 Deployment Guide (Render.com)

- Deploy the **Frontend** as a Static Site (Build command: `npm install && npm run build`, Publish directory: `dist`)
- Deploy the **Backend** as a Docker Web Service
- Set environment variables correctly
- Use GitHub Actions for continuous deployment (optional)

---

## 📈 Future Enhancements

- Integrate semantic matching using Sentence Transformers
- Add user authentication (JWT)
- Store analysis history into databases
- Implement real-time feedback using WebSockets
- Integrate LLM-based resume enhancement suggestions

---
