const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/public/index.html");
});
