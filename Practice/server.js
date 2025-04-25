"use strict";

const express = require('express');
const app = express();

app.get('/posted', function (req, res) {
  res.type("text").send("Hello Jossy, I can see you");
});

app.get('/posted', function (req, res) {
  res.set("Content-Type", "application/json");
  res.json({ "msg": "Hello world!" });
  // which also sets the content type to application/json
});

app.get('/posted/name/:name', function (req, res) {
  res.type("text").send("Your name is: " + req.params.name);
});

app.get('/posted/country/:country/state/:state/city/:city', function (req, res) {
  res.type("text").send("Country:" + req.params.country + " State:" + req.params.state + " City:" + req.params.city);
});

app.get('/posted/trial', function (req, res) {
  res.type("text").send("second test");
});

app.listen(8080);
console.log("Server is running on port 8080");
