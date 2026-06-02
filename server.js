require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const express = require("express");
const connectDB = require("./config/db")
const User = require("./models/User")
const Task = require("./models/Task")

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

connectDB();

app.get("/", (req, res) => {
    res.send("Task Manager API running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});