# Task Manager API

A backend REST API that allows users to register, log in, and manage their personal tasks securely using JWT authentication.

## Features

* User Registration (Signup)
* User Login
* Password Hashing using bcryptjs
* JWT Authentication
* Protected Routes
* Create Tasks
* View Personal Tasks
* Update Tasks
* Delete Tasks

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* dotenv

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
node server.js
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

## What I Learned

* Express.js Routing
* Middleware
* MongoDB & Mongoose
* JWT Authentication
* Password Hashing with bcryptjs
* REST API Development
* CRUD Operations
* Environment Variables (.env)
* Project Structure using Controllers, Routes, Models, and Middleware
* Git & GitHub Basics


## Author

Chandan Singh

GitHub: dev-chandan-s
