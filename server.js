"use strict";

const express = require('express');
const app = express();

app.get('/trial', function (req, res) {
  res.type("text").send("Hello World");
});

app.get('/trial', function (req, res) {
    // res.set("Content-Type", "application/json");
    res.json({ "msg" : "Hello world!" });
    // can also do res.json({ "msg" : "Hello world!"});
    // which also sets the content type to application/json
  });
  
app.listen(8090);
console.log("Server is running on port 8080");
