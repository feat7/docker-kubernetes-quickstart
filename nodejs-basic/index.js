const express = require("express");

app = express();

app.use("/", (req, res) => {
  res.send("Hello there! This is a simple setup for nodejs with docker");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
