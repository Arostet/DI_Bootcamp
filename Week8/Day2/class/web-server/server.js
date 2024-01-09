const express = require("express");
const app = express();

//listen

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
