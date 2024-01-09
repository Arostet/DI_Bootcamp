const express = require("express");
const app = express();
const { getPosts } = require("./dataService/ax.js");

app.listen(5000, () => {
  console.log("Running on 5000");
});

app.get("/posts", async (req, res) => {
  let response = await getPosts();
  console.log();
  res.json(response.data);
});
