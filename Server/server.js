"use strict"
const express = require('express');
const app = express();

const multer = require('multer');

app.use(express.urlencoded({ extened: true }));
app.use(express.json());
app.use(multer().none());

//
// This are the route handlers
// You can add many more here
app.get('/posts', function (req, res) {
  res.type("text").send("Hi");
});
// ***

// This is the server listener
app.listen(8080);
console.log("Server is running on port 8080");

app.post("/addIncome", (req, res) => {
  const job = req.body.job;
  const income = req.body.income;
  const frequency = req.body.frequency;
  res.status(200);
  res.type("text");
  res.send("Done!");
});