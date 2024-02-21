require("dotenv").config();

const express = require("express");
const projectRoutes = require("./routes/projectRoute");

// express app
const app = express();

// port
const port = process.env.PORT || 2000;

// middlewares
app.use(express.json());

// routes
app.use("/api/projects", projectRoutes);

// listen on port
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
