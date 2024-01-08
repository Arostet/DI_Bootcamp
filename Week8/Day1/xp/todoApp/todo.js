import { TodoList } from "./app.js";

let list = [
  {
    task: "homework",
    completed: false,
  },
  {
    task: "dishes",
    completed: false,
  },
  {
    task: "laundry",
    completed: false,
  },
  {
    task: "cooking",
    completed: false,
  },
];

let firstList = new TodoList(list);

firstList.addTask("cycling", false);
firstList.addTask("fishing", true);
console.log(firstList);
firstList.markComplete("laundry");
console.log(firstList);
firstList.listTasks();
