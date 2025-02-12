const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});