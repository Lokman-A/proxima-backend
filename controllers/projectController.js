const { mongoose } = require("mongoose");
const Project = require("../models/projectModel");

///////////////////////////////////////////////////////////////////////////////////////////
//get all projects
///////////////////////////////////////////////////////////////////////////////////////////
const allProjects = async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 });

  res.status(200).json(projects);
};

////////////////////////////////////////////////////////////////////////////////////////////
//get a single project
////////////////////////////////////////////////////////////////////////////////////////////
const getSingleProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid project id" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.status(200).json(project);
};

////////////////////////////////////////////////////////////////////////////////////////////
// post a new project
////////////////////////////////////////////////////////////////////////////////////////////
const postProject = async (req, res) => {
  const { title, tech, duration, budget, manager, dev } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!tech) {
    emptyFields.push("tech");
  }

  if (!duration) {
    emptyFields.push("duration");
  }

  if (!budget) {
    emptyFields.push("budget");
  }

  if (!manager) {
    emptyFields.push("manager");
  }

  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res.status(404).json({
      error: "Please fill in the all fields",
      emptyFields,
    });
  }

  try {
    const project = await Project.create({
      ...req.body,
    });

    res.status(200).json(project);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

////////////////////////////////////////////////////////////////////////////////////////////
// delete a project
////////////////////////////////////////////////////////////////////////////////////////////
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid project id" });
  }

  const project = await Project.findOneAndDelete({ _id: id });
  if (!project) {
    return res.status(404).json({ error: "project not found" });
  }
  res.status(200).json(project);
};

////////////////////////////////////////////////////////////////////////////////////////////
// update a project
////////////////////////////////////////////////////////////////////////////////////////////
const updateProject = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const { title, tech, duration, budget, manager, dev } = req.body;

  const emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!tech) {
    emptyFields.push("tech");
  }

  if (!duration) {
    emptyFields.push("duration");
  }

  if (!budget) {
    emptyFields.push("budget");
  }

  if (!manager) {
    emptyFields.push("manager");
  }

  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res.status(404).json({
      error: "Please fill in the all fields",
      emptyFields,
    });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid project ID" });
  }

  const project = await Project.findOneAndUpdate(
    { _id: id },
    { ...data },
    { new: true }
  );
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.status(200).json(project);
};

////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
  allProjects,
  postProject,
  getSingleProject,
  deleteProject,
  updateProject,
};
