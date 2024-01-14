const express = require("express");
const users_router = express.Router();
const {
  delTask,
  updateTask,
  newTask,
  oneTask,
  allTasks,
} = require("../controllers/user.c.js");

users_router.get("/", allTasks);
users_router.get("/:id", oneTask);
users_router.put("/:id", updateTask);
users_router.delete("/:id", delTask);
users_router.post("/", newTask);

module.exports = {
  users_router,
};
