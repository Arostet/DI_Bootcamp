import logo from "./logo.svg";
import "./App.css";
import { useState, createContext } from "react";
import ThemeButton from "./components/ThemeButton";
import DisplayTheme from "./components/DisplayTheme";
import CharacterCounter from "./components/CharacterCounter";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeButton />
        <DisplayTheme />
      </ThemeContext.Provider>
      <CharacterCounter />
    </div>
  );
}

export default App;
