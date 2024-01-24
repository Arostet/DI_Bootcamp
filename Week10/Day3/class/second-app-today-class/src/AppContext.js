import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Action from "./components/Action";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <AppContext.Provider value={{ count, setCount, name: "Dan" }}>
        <Display />
        <Action />
      </AppContext.Provider>
    </div>
  );
}
