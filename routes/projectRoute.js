const express = require("express");
const {
  postProject,
  allProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");

// router
const router = express.Router();

// get all projects
router.get("/", allProjects);

// get a single project
router.get("/:id", getSingleProject);

// post a new project
router.post("/", postProject);

// delete a project
router.delete("/:id", deleteProject);

// patch a new project
router.patch("/:id", updateProject);

module.exports = router;
