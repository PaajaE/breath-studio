var express = require("express");
var app = express();
var path = require("path");
var port = 8080;

app.use(express.static(path.join(__dirname, "src")));

app.listen(port, function () {
  console.log("Listening on port " + port);
});