const express = require("express");
const Project = require("../models/projectModel");

// router
const router = express.Router();

// get all projects
router.get("/", (req, res) => {
  res.json({ message: " get all projects" });
});

// get a single project
router.get("/:id", (req, res) => {
  res.json({ message: " get a single project" });
});

// post a new project
router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const project = await Project.create({
      ...data,
    });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// delete a project
router.delete("/:id", (req, res) => {
  res.json({ message: " delete a project" });
});

// patch a new project
router.patch("/:id", (req, res) => {
  res.json({ message: " patch a new project" });
});

module.exports = router;
