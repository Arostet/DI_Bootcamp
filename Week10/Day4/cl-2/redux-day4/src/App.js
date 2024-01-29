import "./App.css";
import { useState, useReducer } from "react";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <CounterTwo />
    </div>
  );
}

export default App;
