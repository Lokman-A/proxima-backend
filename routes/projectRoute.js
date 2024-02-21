const express = require("express");

// router
const router = express.Router();

// get all projects
router.get("/", (req, res) => {
  res.json({ message: "get all projects" });
});

// get a single project
router.get("/:id", (req, res) => {
  res.json({ message: "get a single project" });
});

// post a new project
router.post("/:id", (req, res) => {
  res.json({ message: "post a new project" });
});

// delete a project
router.delete("/:id", (req, res) => {
  res.json({ message: "delete a project" });
});

// fetch a new project
router.patch("/:id", (req, res) => {
  res.json({ message: "update a projects" });
});
module.exports = router;
