// ...existing code...

const createTask = async (req, res) => {
    try {
        // Registration logic here
        // ...
        res.status(201).json({ message: 'Task Created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error Creating Task', error });
    }
};

const getTasks = async (req, res) => {
    try {
        // Login logic here
        // ...
        res.status(200).json({ message: 'Tasks Fetched successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error in fetching Tasks', error });
    }
};
const updateTask = async (req, res) => {
    try {
        // Login logic here
        // ...
        res.status(200).json({ message: 'Task Updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error Updating Task', error });
    }
};
const deleteTask = async (req, res) => {
    try {
        // Login logic here
        // ...
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error Deleting Task', error });
    }
};


module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
};
