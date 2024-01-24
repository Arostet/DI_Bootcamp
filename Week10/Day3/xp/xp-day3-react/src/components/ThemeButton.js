import { useState, createContext, useContext } from "react";
import { ThemeContext } from "../App";

const ThemeButton = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <button onClick={handleTheme}>Change Theme</button>;
};

export default ThemeButton;
