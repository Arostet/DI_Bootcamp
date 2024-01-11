const express = require("express");
const {
  getAllUsers,
  searchUsers,
} = require("../controllers/users.controller.js");

const { logger, auth } = require("../controllers/middleware/utils.js");

const users_router = express.Router();

users_router.get("/users", getAllUsers);

//params
users_router.get("/users/:id", searchUsers);

// //query
// users_router.get("/search", (request, response) => {
//   console.log(request.query);
//   const { name } = request.query;
//   const filterUsers = users.filter((item) => {
//     return item.name.toLowerCase().includes(name.toLowerCase());
//   });
//   if (filterUsers.length === 0) {
//     return response.status(404).json({ msg: "user not found" });
//   }
//   response.send(filterUsers);
// });

// //POST Request =CREATE

// users_router.post("/users", (req, res) => {
//   console.log(req.body);
//   const newUser = { ...req.body, id: users.length + 1 };
//   users.push(newUser);

//   res.json(users);
//   //res.send(users) --same as sending json() except json is known to be a JSON
// });

// ///UPDATE --PUT
// //user id that you want to update
// users_router.put("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   const index = users.findIndex((item) => item.id == id);
//   if (index === -1) return res.sendStatus(404);

//   users[index] = { ...users[index], name: name, email: email };

//   res.json(users);
// });

// //DELETE
// users_router.delete("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const index = users.findIndex((item) => item.id == id);
//   if (index === -1) return res.sendStatus(404);
//   users.splice(index, 1);

//   res.json(users);
// });

// module.exports = {
//   users_router,
// };
