 
const  Task  = require("../models/Task");

const  createTask = async (req, res) => {
    try {
        const data = ({
            title,
            description,
            status,
            deadline,
            assignedUser,
            project,
            createdAt 
          } = req.body);

          var createdTask = await Task.create(data);
          return res.status(200).json({ message: "Task Created successfully", response: createdTask });
   
    } catch (error) {
        console.log("error",error)
        res.status(500).json({ message: 'Error Creating Task', error });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res
          .status(200)
          .json({ message: "Task Fetched successfully", response: tasks });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in getTasks', error });
    }
};

const updateTask = async (req, res) => {
    try {  
        let {_id,title, description, status, deadline, assignedUser, project } = req.body;
        const taskdetails = await Task.findOneAndUpdate(
          { _id: _id },
          { title, description, status, deadline, assignedUser, project},
          { returnOriginal: true }
        );
        console.log(taskdetails);
        return res
          .status(200)
          .json({ message: "Task details updated", response: taskdetails });
    } catch (error) {
        res.status(500).json({ message: 'Error in Deleting Task', error });
    }
};
const assignTask = async (req, res) => {
    try {  
        let {_id: task_id,  user_id } = req.body;
        const taskdetails = await Task.findOneAndUpdate(
          { _id: task_id },
          {$push:{ assignedUser: user_id}},
          { returnOriginal: true }
        );
        console.log(taskdetails);
        return res
          .status(200)
          .json({ message: "Task assigned Successfully", response: taskdetails });
    } catch (error) {
        res.status(500).json({ message: 'Error in Deleting Task', error });
    }
};

const deleteTask = async (req, res) => {
    try {  
        const task = await Task.findOneAndDelete({ _id: req.params.id });
        return res.status(200).json({ message: "Task deleted", response: task });
    } catch (error) {
        res.status(500).json({ message: 'Error in Deleting Task', error });
    }
};

module.exports = {
    createTask: createTask,
    getTasks: getTasks,
    updateTask: updateTask,
    deleteTask: deleteTask,
    assignTask :assignTask
};
