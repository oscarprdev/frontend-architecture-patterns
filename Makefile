.PHONY: start dev seed install build help

# Default target
help:
	@echo "Available targets:"
	@echo "  make start    - Start the backend and frontend servers"
	@echo "  make dev      - Start the backend server in development mode (with auto-reload)"
	@echo "  make seed     - Seed the database with sample data"
	@echo "  make install   - Install backend dependencies"
	@echo "  make build    - Build the TypeScript backend"
	@echo "  make help     - Show this help message"

# Start the backend server
start: seed
	(cd backend && npm start) & (cd frontend && npm run dev) & wait

# Start the backend server in development mode
dev:
	cd backend && npm run dev

# Seed the database
seed:
	cd backend && npm run seed

# Install dependencies
install:
	cd backend && npm install

# Build the TypeScript code
build:
	cd backend && npm run build
