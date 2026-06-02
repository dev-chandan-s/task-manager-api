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

---

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

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- Render

---

## What I Learned

- Express.js Routing
- Middleware
- MongoDB & Mongoose
- JWT Authentication
- Password Hashing with bcryptjs
- REST API Development
- CRUD Operations
- Environment Variables (.env)
- Git & GitHub
- Cloud Deployment using Render
- Backend Project Structure using Controllers, Routes, Models, and Middleware

---

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
├── README.md
├── package.json
└── server.js
```

---

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

---

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

---

## Testing the API

The API is deployed and publicly accessible:

https://task-manager-api-u711.onrender.com

You can test it using Postman, Thunder Client, Insomnia, or any REST client.

### 1. Register a User

Request:

```http
POST https://task-manager-api-u711.onrender.com/api/auth/signup
```

Body:

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

---

### 2. Login

Request:

```http
POST https://task-manager-api-u711.onrender.com/api/auth/login
```

Body:

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "YOUR_JWT_TOKEN"
}
```

---

### 3. Create a Task

Request:

```http
POST https://task-manager-api-u711.onrender.com/api/tasks
```

Headers:

```text
authorization: YOUR_JWT_TOKEN
```

Body:

```json
{
  "title": "Learn SQL"
}
```

---

### 4. Get All Tasks

Request:

```http
GET https://task-manager-api-u711.onrender.com/api/tasks
```

Headers:

```text
authorization: YOUR_JWT_TOKEN
```

---

### 5. Update a Task

Request:

```http
PATCH https://task-manager-api-u711.onrender.com/api/tasks/:id
```

Headers:

```text
authorization: YOUR_JWT_TOKEN
```

Replace `:id` with an actual task ID.

---

### 6. Delete a Task

Request:

```http
DELETE https://task-manager-api-u711.onrender.com/api/tasks/:id
```

Headers:

```text
authorization: YOUR_JWT_TOKEN
```

Replace `:id` with an actual task ID.

---

## Security Features

- Passwords are hashed using bcryptjs.
- JWT Authentication protects task routes.
- Users can only access their own tasks.
- Sensitive credentials are stored in environment variables.

---

## Future Improvements

- Task Categories
- Due Dates
- Task Priorities
- User Profile Management
- Pagination
- Input Validation using Express Validator
- Refresh Tokens
- Swagger API Documentation
- Role-Based Authorization

---

## Author

**Chandan Singh**

GitHub:
https://github.com/dev-chandan-s

Project Repository:
https://github.com/dev-chandan-s/task-manager-api

Live API:
https://task-manager-api-u711.onrender.com