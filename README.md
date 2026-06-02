# Task Manager API

A RESTful Task Manager API built using Node.js, Express.js, MongoDB, and JWT Authentication.

## Live Demo

**API URL:** https://task-manager-api-u711.onrender.com

Example:

GET /

Returns:

```json
"Task Manager API running"
```

## Features

✅ User Registration (Signup)

✅ User Login

✅ Password Hashing using bcryptjs

✅ JWT Authentication

✅ Protected Routes

✅ Create Tasks

✅ View Personal Tasks

✅ Update Tasks

✅ Delete Tasks

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv
* Render

## What I Learned

* Express.js Routing
* Middleware
* MongoDB & Mongoose
* JWT Authentication
* Password Hashing with bcryptjs
* REST API Development
* CRUD Operations
* Environment Variables (.env)
* Git & GitHub
* Cloud Deployment with Render

## Project Structure

task-manager-api

├── config

├── controllers

├── middleware

├── models

├── routes

├── .env.example

├── server.js

└── package.json

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file

```env
PORT=3000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

4. Start the server

```bash
npm start
```

## API Endpoints

### Authentication

POST /api/auth/signup

POST /api/auth/login

### Tasks

GET /api/tasks

POST /api/tasks

PATCH /api/tasks/:id

DELETE /api/tasks/:id

## Author

Chandan Singh

GitHub: dev-chandan-s
