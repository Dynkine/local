var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port: ", port);
});

app.get("/", (req, res, next) => {
  res.send("OK");
});
app.get("/healthcheck", (req, res, next) => {
  res.send("OK");
});
