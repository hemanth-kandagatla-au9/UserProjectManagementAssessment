 
const  Project  = require("../models/Project");

const  createProject = async (req, res) => {
    try {
        const data = ({
            title,
            description,
            owner,
            createdAt 
          } = req.body);

          var createdProject = await Project.create(data);
          return res.status(200).json({ message: "Project Created successfully", response: createdProject });
   
    } catch (error) {
        res.status(500).json({ message: 'Error Creating Project', error });
    }
};

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        return res
          .status(200)
          .json({ message: "Project Fetched successfully", response: projects });
    } catch (error) {
        console.log("error",error)

        res.status(500).json({ message: 'Error loading in getProjects', error });
    }
};

const deleteProject = async (req, res) => {
    try {  
        const project = await Project.findOneAndDelete({ _id: req.params.id });
        return res.status(200).json({ message: "Project deleted", response: project });
    } catch (error) {
        res.status(500).json({ message: 'Error in Deleting Project', error });
    }
};
 

module.exports = {
 
    createProject: createProject,
    getProjects: getProjects,
    deleteProject: deleteProject
};
