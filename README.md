# BANKAPP V1

A modern banking application built with Next.js frontend, Python FastAPI backend, PostgreSQL database, and Docker containerization.

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Backend**: Python FastAPI
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Authentication**: JWT

## Project Structure

```
├── frontend/           # Next.js application
├── backend/           # FastAPI application
├── database/          # Database scripts and migrations
├── docker-compose.yml # Multi-container orchestration
└── README.md         # This file
```

## Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- Python 3.11+ (for local development)

## Quick Start

1. Clone the repository
2. Start all services with Docker:
   ```bash
   docker-compose up --build
   ```
3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## Development Setup

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Database Setup
```bash
# Database will be automatically initialized with Docker Compose
# For manual setup, check database/init.sql
```

## Environment Variables

Copy the example environment files and update with your values:
```bash
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Backend
- `uvicorn app.main:app --reload` - Start development server
- `pytest` - Run tests
- `black .` - Format code
- `flake8 .` - Lint code

## API Documentation

Once the backend is running, visit http://localhost:8000/docs for interactive API documentation.

## Contributing

1. Follow the existing code style and patterns
2. Write tests for new features
3. Update documentation as needed
4. Use conventional commit messages

## License

MIT License