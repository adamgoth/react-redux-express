//server dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");

const peaksData = require("./data/peaksData");

//require scheme
const Weather = require("./models/model.js");

//create instance of express
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, "/client")));

//prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//configure connection to mongoDB (mlab)
mongoose.connect(
  `mongodb://${process.env.USER}:${process.env.PASSWORD}<dbURL>`
);

const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//GET entries
app.get("/", function(req, res) {
  res.send("welcome");
});

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
