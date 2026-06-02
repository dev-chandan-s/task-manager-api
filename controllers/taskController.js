const Task = require("../models/Task");

const createTask = async (req, res) => {
    try{
        const {title} = req.body;

        if(!title){
            return res.status(400).json({
                message: "Task is required"
            });
        }

        const task = new Task({
            title,
            user: req.user.id
        });

        await task.save();

        res.status(201).json(task);

    }catch(error){
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        }); 
    }
};

const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find({
            user: req.user.id
        });

        res.status(200).json(tasks);

    }catch(error){
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

const updateTask = async (req, res) => {
    try{
        const task = await Task.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if(!task){
            return res.status(404).json({
                message: "Task Not Found"
            });
        }

        task.completed = true;

        await task.save();

        res.status(200).json(task);

    }catch(error){
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

const deleteTask = async (req, res) => {
    try{
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if(!task){
            return res.status(404).json({
                message: "Task Not Found"
            });
        }

        res.status(200).json({
            mesage: "Task Deleted"
        });

    }catch(error){
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};