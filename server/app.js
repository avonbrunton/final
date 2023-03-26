const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
var multer = require("multer");
var forms = multer();
require("dotenv").config();
const app = express();
const router = require("./routes");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());
app.use("/public", express.static("public"));
app.use("/api", router);

mongoose
  .connect("mongodb+srv://wherethebuzz:wherethebuzz@cluster0.eiiuczc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("db connection done");
  })
  .catch((err) => {
    console.log("db connection issue", err);
  });
app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});
