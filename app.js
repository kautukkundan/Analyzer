var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/home", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/home",urlencodedParser, function (req, res) {
  console.log(req.body);  
});

app.listen(3000, "0.0.0.0");
console.log("listening to port 3000");
