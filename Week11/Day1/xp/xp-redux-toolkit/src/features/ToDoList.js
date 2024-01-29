import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggleComplete } from "./toDoListSlice";
import { useState } from "react";
import "./todo.css";

const ToDoList = (props) => {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDo.toDos);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div>
        <input onChange={handleChange} />
        <button onClick={() => dispatch(add(input))}>Add To Do</button>
      </div>
      <ul style={{ listStyleType: "none" }}>
        {toDos.map((toDo) => (
          <li
            key={toDo.id}
            className={toDo.completed ? "completed" : ""}
            onClick={() => dispatch(toggleComplete(toDo.id))}
          >
            {toDo.title}
            <button onClick={() => dispatch(remove(toDo.id))}>REMOVE</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ToDoList;
