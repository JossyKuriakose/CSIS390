"use strict";

// These are immport statements
const express = require('express');
const app = express();

/**
 * put /posts after link
 *
 * @param {import('express').Request} req - Incoming request object
 * @param {import('express').Response} res - Response object
 * @tag {type} parameterName - description
 */
app.get('/posts', function (req, res) {
  res.type("text").send("Yay it works");
});
// ***


// This is the server listener
app.listen(8080);
console.log("Server is running on port 8080");

//app.get('/posts/:id', function (req, res) {
//  res.type("text").send("Post with ID: " + req.params.id);
//});

//app.get('/hello', function (req, res) {
  // res.set("Content-Type", "text/plain");
  //res.type("text"); // same as above
  //res.send('Hello World!');
//});

//app.get('/json', function (req, res) {
//  res.type("json");
//  res.json({ message: "Hello World!" });
//});

//app.get('/states/:state/cities/:city', function (req, res) {
//  const state = req.params.state;
//  const city = req.params.city;
//  res.send(`State: ${state}, City: ${city}`);
//});

//app.get("/cityInfo", function (req, res) {
  //let state = req.query.state; // wa
  //let city = req.query.city;   // Seattle
  // do something with variables in the response
  //res.json({"city":city})
//});