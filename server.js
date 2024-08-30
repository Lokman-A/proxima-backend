require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/projectRoute");
const { mongoose } = require("mongoose");

// express app
const app = express();

// port
const port = process.env.PORT || 2000;

// middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
// routes
app.use("/api/projects", router);

// mongoDB
// mongoose.set("strictQuery", true); // optional
mongoose
  .connect(process.env.MONGO_BD)
  .then(() => {
    // listen on port
    app.listen(port, () => {
      console.log(` listening on port:  http://localhot:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
