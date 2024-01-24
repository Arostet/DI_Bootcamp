import { useState } from "react";

const ToDoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; //if its empty

    if (editIndex > -1) {
      const updatedToDos = [...toDos];
      updatedToDos[editIndex] = {
        text: inputValue,
        completed: updatedToDos[editIndex].completed,
      };
      setToDos(updatedToDos);
      setEditIndex(-1);
    } else {
      setToDos([...toDos, { text: inputValue, completed: false }]);
    }
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRemoveToDo = (index) => {
    const newToDos = [...toDos.slice(0, index), ...toDos.slice(index + 1)];
    setToDos(newToDos);
  };

  const toggleCompletion = (index) => {
    const newToDos = toDos.map((toDo, i) =>
      i === index ? { ...toDo, completed: !toDo.completed } : toDo
    );
    setToDos(newToDos);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setInputValue(toDos[index].text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <button type="submit">
          {editIndex > -1 ? "Save Edit" : "Add ToDo"}
        </button>
      </form>
      {toDos.map((toDo, index) => (
        <div key={index}>
          <span
            style={{ textDecoration: toDo.completed ? "line-through" : "none" }}
          >
            {toDo.text}
          </span>
          <button type="button" onClick={() => toggleCompletion(index)}>
            {toDo.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button type="button" onClick={() => handleRemoveToDo(index)}>
            Delete
          </button>
          <button type="button" onClick={() => startEditing(index)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDoInput;
