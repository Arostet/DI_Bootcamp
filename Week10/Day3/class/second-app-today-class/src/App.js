import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  const nameRef = useRef("dan");
  let name = "John";

  const inputRef = useRef();
  const changeJohn = () => {
    name = "Mary";
    // console.log(name);
  };

  const changeDan = () => {
    nameRef.current = "DanDan";
    // console.log(nameRef);
    console.log(inputRef.current.value);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div>
        <h3>{name}</h3>
        <button onClick={() => changeJohn()}>Change John</button>
      </div>
      <div>
        <h3>{nameRef.current}</h3>
        <button onClick={() => changeDan()}>Change Dan</button>
      </div>
      <div>
        <input ref={inputRef} />
      </div>
    </div>
  );
}

export default App;
