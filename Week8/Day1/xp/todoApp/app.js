export class TodoList {
  constructor(taskList) {
    this.taskList = taskList;
  }
  addTask(name, yn) {
    const newTask = {
      task: name,
      completed: yn,
    };
    return this.taskList.push(newTask);
  }
  markComplete(task) {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].task === task) {
        this.taskList[i].completed = true;
      }
    }
  }

  listTasks() {
    this.taskList.forEach((task) => {
      console.log(task.task);
    });
  }
}
