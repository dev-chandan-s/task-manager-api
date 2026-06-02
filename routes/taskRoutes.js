const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const {createTask, getTasks, updateTask, deleteTask} = require("../controllers/taskController");

router.post("/", verifyToken, createTask);
router.get("/", verifyToken, getTasks);
router.patch("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;