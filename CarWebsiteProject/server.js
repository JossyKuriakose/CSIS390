"use strict";

// These are immport statements
const express = require('express');
const app = express();

// ***
// This are the route handlers
// You can add many more here
app.get('/posts', function (req, res) {
  res.type("text").send("Hi");
});
// ***

// This is the server listener
app.listen(8080);
console.log("Server is running on port 8080");