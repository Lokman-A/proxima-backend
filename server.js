require("dotenv").config();
const express = require("express");
const router = require("./routes/projectRoute");
const { default: mongoose } = require("mongoose");

// express app
const app = express();
// port
const port = process.env.PORT || 2000;
// middlewares
app.use(express.json());
// routes
app.use("/api/projects", router);
// mongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen on port
    app.listen(port, () => {
      console.log(` listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
