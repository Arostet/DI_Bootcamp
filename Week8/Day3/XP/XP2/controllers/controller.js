const { toDo } = require("../config/db.js");

const getToDoList = (req, res) => {
  res.send(toDo);
};

const createToDo = (req, res) => {
  const newToDo = { ...req.body, id: toDo.length + 1 };
  toDo.push(newToDo);

  res.send(toDo);
};

const markCompleted = (req, res) => {
  const { id } = req.params;
  const index = toDo.findIndex((item) => item.id == id);

  toDo[index] = { ...toDo[index], completed: true };

  res.send(toDo);
};

const deleteToDo = (req, res) => {
  console.log("request recieved");
  const { id } = req.params;
  const index = toDo.findIndex((item) => item.id == id);
  toDo.splice(index, 1);

  res.send(toDo);
};

module.exports = {
  getToDoList,
  createToDo,
  markCompleted,
  deleteToDo,
};
