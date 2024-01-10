const express = require("express");
// const bp = require("body-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//listen
//CRUD Create-POST , Read -GET, Update -PUT, DELETE - DELTE

app.listen(3001, () => {
  console.log("run on port 3001");
});
app.use("/", express.static(__dirname + "/public"));
// app.get
// app.post
// app.put
// app.delete

const users = [
  {
    id: 1,
    name: "John",
    email: "jjj@gmail.com",
  },
  {
    id: 2,
    name: "Mike",
    email: "mmm@gmail.com",
  },
  {
    id: 3,
    name: "Sarah",
    email: "sss@gmail.com",
  },
];

app.get("/users", (request, response) => {
  response.json(users);
});

//params
app.get(`/users/:id/`, (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  const user = users.find((item) => item.id == id);
  if (!user) return response.status(404).json({ msg: "user not found" });
  response.json(user);
});

//query
app.get("/search", (request, response) => {
  console.log(request.query);
  const { name } = request.query;
  const filterUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filterUsers.length === 0) {
    return response.status(404).json({ msg: "user not found" });
  }
  response.send(filterUsers);
});

//POST Request =CREATE

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = { ...req.body, id: users.length + 1 };
  users.push(newUser);

  res.json(users);
  //res.send(users) --same as sending json() except json is known to be a JSON
});

///UPDATE --PUT
//user id that you want to update
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.sendStatus(404);

  users[index] = { ...users[index], name: name, email: email };

  res.json(users);
});

//DELETE
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.sendStatus(404);
  users.splice(index, 1);

  res.json(users);
});
