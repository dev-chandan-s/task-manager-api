# Task Manager API

A RESTful Task Manager API built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication.

## Live Demo

🌐 Deployed API:

https://task-manager-api-u711.onrender.com

Test the API:

GET /

Response:

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
* Cloud Deployment using Render
* Backend Project Structure using Controllers, Routes, Models, and Middleware

## Project Structure

```text
task-manager-api
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── taskController.js
│
├── middleware
│   └── verifyToken.js
│
├── models
│   ├── User.js
│   └── Task.js
│
├── routes
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── .env.example
├── .gitignore
├── server.js
├── package.json
└── README.md
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/dev-chandan-s/task-manager-api.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env File

```env
PORT=3000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

### 4. Start the Server

```bash
npm start
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/signup
```

#### Login User

```http
POST /api/auth/login
```

### Tasks

#### Get All Tasks

```http
GET /api/tasks
```

#### Create Task

```http
POST /api/tasks
```

#### Update Task

```http
PATCH /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

## Sample Workflow

1. Register a new user using `/api/auth/signup`
2. Login using `/api/auth/login`
3. Copy the JWT token returned by the API
4. Add the token to the request header:

```http
authorization: YOUR_JWT_TOKEN
```

5. Create, view, update, and delete your tasks

## Future Improvements

* Task Categories
* Due Dates
* Task Priorities
* User Profile Management
* Pagination
* Input Validation using Express Validator
* Refresh Tokens
* API Documentation with Swagger

## Author

**Chandan Singh**

GitHub: https://github.com/dev-chandan-s
