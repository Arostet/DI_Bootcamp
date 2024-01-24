import { useContext } from "react";
import { ThemeContext } from "../App";

const DisplayTheme = (props) => {
  const { theme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
  };
  return <div style={themeStyles}>This is the style!</div>;
};

export default DisplayTheme;
