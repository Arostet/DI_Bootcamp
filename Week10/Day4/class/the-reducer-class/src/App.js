import { useState, useReducer, useRef } from "react";
import "./App.css";
const initialState = {
  count: 10,
};
const INCREMENT = "increment";
const DECREMENT = "decrement";

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + action.by };
  } else if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  return state;
  // switch (action.type) {
  //   case "increment":
  //     return { ...state, count: state.count + action.by };
  //   case "decrement":
  //     return { ...state, count: state.count - 1 };
  //   default:
  //     return state;
  // }
};
function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  //
  console.log(state);

  const divRed = useRef();

  //
  return (
    <div className="App">
      <header className="App-header">
        <h2>useState</h2>
        <button onClick={() => setCount(count + 1)}> + </button>
        {count}
        <button onClick={() => setCount(count - 1)}> - </button>
        <h2>useReducer</h2>
        <button onClick={() => dispatch({ type: INCREMENT, by: 5 })}>
          {" "}
          +{" "}
        </button>
        {state.count}
        <button onClick={() => dispatch({ type: DECREMENT })}> - </button>
      </header>
    </div>
  );
}
export default App;
