import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import Child from "./components/Child";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>
      <h1> Error Boundary</h1>
      {/* <Parent auth="user">
        <Child />
        <Counter />
      </Parent> */}
      <br />
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
