const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post("/posts", (req, res) => {
  console.log(req.body);
  const newPost = { ...req.body, id: posts.length + 1 };
  posts.push(newPost);

  res.json(posts);
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const indx = posts.findIndex((item) => item.id == id);
  if (indx === -1) {
    res.statusCode(404);
  } else {
    posts[indx] = { ...posts[indx], title: title, content: content };
  }
  res.json(posts);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const indx = posts.findIndex((item) => item.id == id);
  if (indx === -1) {
    res.statusCode(404);
  } else {
    posts.splice(indx, 1);
  }
  res.send(posts);
});
