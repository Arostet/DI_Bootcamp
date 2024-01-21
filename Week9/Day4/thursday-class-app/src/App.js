import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import users from "./users.json";
import React, { Component, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("My Tidadatle");
  const [users, setUsers] = useState();

  const changeTitle = () => {
    setTitle("My Users");
    getUsers();
  };
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users");
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
};

export default App;
