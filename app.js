var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var upload = require('express-fileupload');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(upload());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/home", function (req, res) {
	res.render("home");
});

app.post("/home", function(req, res){
	if (!req.files)
		return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  var filename = sampleFile.name;
  

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('./uploads/'+filename, function(err) {
  	if (err){
  		return res.status(500).send(err); 
  		res.send("Some Error Uploading the File...Please Try Again")
  	}
  	res.redirect('home');
  });
});

app.listen(3000, "0.0.0.0");
console.log("listening to port 3000");
