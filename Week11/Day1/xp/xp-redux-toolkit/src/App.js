import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./features/todos/ToDoList";
import Users from "./features/users/Users";
function App() {
  return (
    <div className="App">
      <ToDoList />
      <Users />
    </div>
  );
}

export default App;
