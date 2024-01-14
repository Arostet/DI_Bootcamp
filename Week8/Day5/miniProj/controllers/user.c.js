const fs = require("fs");
const path = require("path");
const readTasks = () => {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../config", "users.json"), "utf8")
  );
};
const tasks = readTasks();

const writeTasks = (tasks) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../config", "users.json"),
    JSON.stringify(tasks, null, 2),
    "utf8"
  );
};

//GETS
const allTasks = (req, res) => {
  res.json(tasks);
};

const oneTask = (req, res) => {
  const task = tasks.find((t) => t.id === req.params);
  if (!task) {
    return res.status(404).send("Task not Found");
  }
  res.json(task);
};

//POSTS
const newTask = (req, res) => {
  const task = { ...req.body, id: tasks.length + 1 };
  tasks.push(task);
  writeTasks(tasks);
  res.status(201).json(task);
};

//PUT
const updateTask = (req, res) => {
  const index = tasks.findIndex((t) => t.id === req.params);
  if (index === -1) {
    return res.status(404).send("Not Found");
  }
  tasks[index] = { ...task[index], ...req.body };
  writeTasks(tasks);
  res.json(tasks[index]);
};

//DELETE
const delTask = (req, res) => {
  const index = tasks.findIndex((t) => t.id === req.params);
  if (index === -1) {
    return res.status(404).send("Not Found");
  }
  tasks.splice(index, 1);
  writeTasks(tasks);
  res.json(tasks[index]);
};

module.exports = {
  delTask,
  updateTask,
  newTask,
  oneTask,
  allTasks,
};
