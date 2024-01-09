const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const posts = [
  {
    id: 1,
    title: "Fishing in Ireland",
    content:
      "Lo and behold, in a land close but far, there was a man... Who Fished! In Ireland!",
  },
  {
    id: 2,
    title: "Fishing in Germany",
    content:
      "Lo and behold, in a land close but far, there was a man... Who Fished! In Germany!",
  },
  {
    id: 3,
    title: "Fishing in Kalamazoo",
    content:
      "Lo and behold, in a land close but far, there was a man... Who Fished! In Kalamazoo!",
  },
  {
    id: 4,
    title: "Fishing in Portugal",
    content:
      "Lo and behold, in a land close but far, there was a man... Who Fished! In Portugal!",
  },
  {
    id: 5,
    title: "Fishing in Libya",
    content:
      "Lo and behold, in a land close but far, there was a man... Who Fished! In Libya!",
  },
];

app.listen(3002, () => {
  console.log("Running on 3002");
});

app.use("/", express.static(__dirname + "/public"));

app.get("/posts", (request, response) => {
  response.json(posts);
});

app.get("/posts/:id", (request, response) => {
  console.log("eq");
  const { id } = request.params;
  const post = posts.find((post) => post.id == id);
  if (!post) {
    response.status(404);
  } else {
    response.json(post);
  }
});
