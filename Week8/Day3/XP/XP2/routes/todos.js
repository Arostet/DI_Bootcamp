const express = require("express");
const router = express.Router();
const {
  getToDoList,
  createToDo,
  markCompleted,
  deleteToDo,
} = require("../controllers/controller.js");

router.get("/todos", getToDoList);
router.post("/todos", createToDo);
router.put("/todos/:id", markCompleted);
router.delete("/todos/:id", deleteToDo);

module.exports = {
  router,
};
