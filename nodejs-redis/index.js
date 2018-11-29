const express = require("express");
const redis = require("redis");

app = express();

client = redis.createClient({
  host: "redis-server",
  port: 6379
});

client.set("count", 0);

client.on("error", err => {
  console.log(err);
});

app.use("/", (req, res) => {
  client.get("count", (err, count) => {
    res.send("Total number of visits " + count);
    client.set("count", parseInt(count) + 1);
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
