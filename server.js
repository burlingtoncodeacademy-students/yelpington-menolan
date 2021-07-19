//importing components
const { Router } = require("express");
const express = require("express");
const path = require("path");
const fs = require("fs");

//getting and translating the JSON objects
let rest = JSON.parse(fs.readFileSync("./client/public/api/restaurants.json"));

//setting up express ports
const app = express();
const port = process.env.PORT || 5000;

//setting static server
app.use(express.static("public"));

//listening to the ports
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/public/index.html");
});

//getting api route
app.get("/api", (req, res) => {
  return res.json(rest);
});

//getting individual id routes
app.get("/api/:id", (req, res) => {
  return res.json(
    rest.find((restaurant) => restaurant.id == req.params.id) || {}
  );
});
