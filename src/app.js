var express = require("express");
var app = express();
// var port = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  res.send("OK");
});
app.get("/healthcheck", (req, res, next) => {
  res.send("OK");
});
