# Evgenz Panel

A comprehensive admin panel for vehicle and charging station management, built with NestJS, Next.js, and MySQL.

## Project Structure

- `admin-panel/`: Next.js frontend application.
- `backend/`: NestJS backend application with Prisma ORM.

## Prerequisites

- **Docker & Docker Desktop**: For running the database and services.
- **Node.js**: Version 20 or higher (recommended for local development).

## Getting Started

Follow these steps to get the project up and running:

### 1. Start the Infrastructure (Docker)

Ensure Docker Desktop is running. Bring up the containers for the database, backend, and frontend:

```bash
docker compose up -d
```

This will start:
- **MySQL (8.0)**: On port 3306.
- **phpMyAdmin**: On port 8080.
- **Backend API**: On port 4000.
- **Admin Panel**: On port 3000.

### 2. Database Initialization (One-time)

If you are running the project for the first time or need to reset the data, seed the database with an admin user:

```bash
cd backend
npx prisma db seed
```

### 3. Access the Services

| Service | URL | Credentials |
| :--- | :--- | :--- |
| **Admin Panel** | [http://localhost:3000](http://localhost:3000) | `admin@evgenz.com` / `password123` |
| **phpMyAdmin (DB Panel)** | [http://localhost:8080](http://localhost:8080) | `user` / `password` |
| **Backend API** | [http://localhost:4000](http://localhost:4000) | - |

## Local Development (Optional)

If you prefer to run the apps locally (without Docker containers for code):

### Backend
1. `cd backend`
2. `npm install`
3. `npm run start:dev`

### Admin Panel
1. `cd admin-panel`
2. `npm install`
3. `npm run dev`

## Deployment

The project is already dockerized. You can use the `docker-compose.yml` file for simple deployments or as a base for orchestration.
