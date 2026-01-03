# Backend — VectorShift Assignment 🐍

Small FastAPI backend that provides simple pipeline analysis endpoints used by the frontend flow editor.

**Quick overview** 🔎
- Framework: `FastAPI` ⚡
- Main file: `main.py` 🗂️
- Purpose: accept flow data (nodes + edges) and return basic analysis (node/edge counts, DAG check) ✅

**Endpoints** 🔗
- `GET /` — basic health/info message
- `POST /pipelines/parse` — accepts a JSON body with `nodes` and `edges` and returns:
  - `num_nodes` (int)
  - `num_edges` (int)
  - `is_dag` (bool) — whether the graph is a directed acyclic graph

**Request format (example)** 🧾
```json
{
  "nodes": [{ "id": "n1", "type": "InputNode", "position": { "x": 0, "y": 0 }, "data": {} }],
  "edges": [{ "id": "e1", "source": "n1", "target": "n2" }]
}
```

**Run locally (Windows PowerShell)** ▶️
```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Default CORS allows `http://localhost:5173` (Vite dev server).

**Notes & tips** 💡
- If you change frontend dev port, update `allow_origins` in `main.py`.
- Add more analysis or execution endpoints if you want to run the pipeline logic server-side.

Enjoy developing the backend — happy hacking! 😄
