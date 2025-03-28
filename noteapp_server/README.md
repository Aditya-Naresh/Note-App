# FastAPI Project

This is a FastAPI-based project.

## Prerequisites

- Python 3.8+
- `virtualenv` (if not installed, use `pip install virtualenv`)

## Setup Instructions

### 1. Create and Activate a Virtual Environment

#### On macOS/Linux:
```sh
python3 -m venv venv
source venv/bin/activate
```

#### On Windows:
```sh
python -m venv venv
venv\Scripts\activate
```

### 2. Install Dependencies

```sh
pip install -r requirements.txt
```

### 3. Configure MongoDB Connection

Modify `database.py` to include your MongoDB connection:
```python
# update the mongo url
MONGO_URI = os.getenv("MONGO_URL", "mongodb://localhost:27017")
```

### 4. Run the FastAPI Application

```sh
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

- The application will be available at: [http://127.0.0.1:8000](http://127.0.0.1:8000)
- Interactive API docs available at: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- Alternative OpenAPI docs at: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)


