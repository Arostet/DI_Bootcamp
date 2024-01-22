import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FormComponent from "./components/FormComponent";

function App() {
  const [inputs, setInputs] = useState();

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          name="name"
          type="text"
          onChange={handleChange}
        />
        <input
          placeholder="email"
          name="email"
          type="text"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          name="password"
          type="text"
          onChange={handleChange}
        />
        Status: <input type="checkbox" name="status" onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
      <FormComponent info={inputs} />
    </div>
  );
}

export default App;
