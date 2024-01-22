import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [username, setUsername] = useState("");
  // const [numbers, setNumbers] = useState("");
  // const [yesno, setYesNo] = useState(false);

  const [inputs, setInputs] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleInputs = (e) => {
    const value =
      e.target.type == "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        First Name:{" "}
        <input name="fname" type="text" onChange={(e) => handleInputs(e)} />
        Email:{" "}
        <input type="text" name="email" onChange={(e) => handleInputs(e)} />
        <br />
        Password:{" "}
        <input type="text" name="password" onChange={(e) => handleInputs(e)} />
        Username:
        <input type="text" name="username" onChange={(e) => handleInputs(e)} />
        <select name="numbers" onChange={(e) => handleInputs(e)}>
          <option value="-1">Choose</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        Yes/No:
        <input type="checkbox" name="yesno" onChange={(e) => handleInputs(e)} />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
