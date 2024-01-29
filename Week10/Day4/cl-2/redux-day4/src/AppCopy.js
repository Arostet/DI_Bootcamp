// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useReducer } from "react";

// const initialState = {
//   count: 0,
//   users: [],
// };

// const reducer = (state, action) => {
//   if (action.type === "increment") {
//     return { ...state, count: state.count + 1 };
//   } else if (action.type === "decrement") {
//     return { ...state, count: state.count - 1 };
//   }
//   return { ...state };
// };

// function App() {
//   const [counterState, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       Count: {counterState.count}
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//     </div>
//   );
// }

// export default App;
