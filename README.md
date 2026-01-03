
# VectorShift Assignment 🚀

A small full-stack assignment containing a React + Vite frontend and a Python backend. This repository demonstrates a node-based flow UI and simple backend endpoints for running/processing flows.

**Project Structure** 🗂️
- `backend/` 🐍: Python backend (`main.py`) with `requirements.txt`
- `frontend/` ⚛️: Vite + React app in the `frontend` folder

**Highlights** ✨
- Visual flow editor with node types: `InputNode`, `FilterNode`, `MathNode`, `LLMNode`, `LoggerNode`, `DelayNode`, `MergeNode`, `OutputNode`, `TextNode` 🧩
- Fast frontend dev experience with Vite ⚡
- Simple Python backend for processing flows and serving APIs 🔌

Getting started (Quick Start) ▶️

Prerequisites:
- Node.js (16+ recommended) and npm/yarn
- Python 3.8+ and pip

Run the backend:

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

Run the frontend:

```bash
cd frontend
npm install
npm run dev
```

Build (frontend):

```bash
cd frontend
npm run build
```

File overview 📁
- `frontend/src/` — React source files and components (see `components/` and `nodes/`) 🧩
- `backend/main.py` — backend entrypoint (API / processing) 🐍
- `backend/requirements.txt` — Python dependencies 📦

Common Tasks 🛠️
- Start frontend dev server: `npm run dev` (from `frontend/`) 🖥️
- Start backend server: `python main.py` (from `backend/`) 🚀

Contributing 🤝
- Feel free to open issues or PRs. Keep changes focused and add brief descriptions.

Contact & License 📝
- Author: You — adapt as needed
- License: MIT (or change to your preferred license)

Enjoy exploring the app — happy hacking! 😄
