const express = require("express");
const users_router = express.Router();
const {
  delTask,
  updateTask,
  newTask,
  oneTask,
  allTasks,
} = require("../controllers/u.controller.js");

users_router.get("/", allTasks);
users_router.get("/:id", oneTask);
users_router.put('/:id', updateTask)


module.exports = {
  users_router,
};
