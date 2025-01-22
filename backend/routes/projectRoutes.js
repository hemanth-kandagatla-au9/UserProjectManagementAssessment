const express = require("express");
const {
  createProject,
  getProjects,
  deleteProject,
} = require("../controllers/projectController");
const authenticate = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createProject);
router.get("/", authenticate, getProjects);
router.delete("/:id", authenticate, deleteProject);

module.exports = router;
