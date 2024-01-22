import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import React, { useEffect, useState } from "react";
import GetUsersButton from "./components/GetUsersButton";
import SearchUsers from "./components/SearchUsers";

const App = () => {
  const [title, setTitle] = useState("My Tidadatle");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const search = (value) => {
    const filter = users.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredUsers(filter);
  };
  return (
    <div>
      <h1>{title}</h1>
      <SearchUsers search={search} />
      {filteredUsers &&
        filteredUsers.map((item) => <User userinfo={item} key={item.id} />)}
      <GetUsersButton getUsersFunc={getUsers} />
    </div>
  );
};

export default App;
