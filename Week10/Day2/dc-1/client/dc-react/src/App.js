import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Hello from "./components/Hello";
import Post from "./components/Post";
function App() {
  return (
    <div className="App">
      <Hello />
      <Post />
    </div>
  );
}

export default App;
