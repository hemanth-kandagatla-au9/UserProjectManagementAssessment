const express = require("express");
const {
  createProject,
  getProjects,
  deleteProject,
} = require("../controllers/projectController");
const {checkAuth} = require("../middleware/auth");
const router = express.Router();

router.post("/", checkAuth, createProject);
router.get("/", checkAuth, getProjects);
router.delete("/:id", checkAuth, deleteProject);

module.exports = router;
