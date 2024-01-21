import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecNum] = useState(0);
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondResult, setSecondResult] = useState(null);

  const handleFirstNum = (e) => {
    setFirstNum(e.target.value);
  };
  const handleSecNum = (e) => {
    setSecNum(e.target.value);
  };

  const handleOperator = (e) => {
    setOperator(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setResult(Number(firstNum) + Number(secondNum));
  };

  const handleSubmitTwo = (e) => {
    e.preventDefault();
    const nFNum = Number(firstNum);
    const nSNum = Number(secondNum);
    switch (operator) {
      case "+":
        setSecondResult(nFNum + nSNum);
        break;
      case "-":
        setSecondResult(nFNum - nSNum);
        break;
      case "/":
        setSecondResult(nFNum / nSNum);
        break;
      case "*":
        setSecondResult(nFNum * nSNum);
        break;
      default:
        setSecondResult("Invalid Operator");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="integer"
          value={firstNum}
          onChange={handleFirstNum}
        ></input>
        <input type="integer" value={secondNum} onChange={handleSecNum}></input>
        <input type="submit" value={"add"}></input>
      </form>
      <h3>{result}</h3>

      <form onSubmit={handleSubmitTwo}>
        <input type="text" value={operator} onChange={handleOperator}></input>
        <input type="submit" value={"operate"}></input>
      </form>
      <h3>{secondResult}</h3>
    </div>
  );
}

export default App;
