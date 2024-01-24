import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Hello = (props) => {
  const [hello, setHello] = useState([]);
  const params = useParams();

  const getHello = async () => {
    try {
      const res = await axios.get("http://localhost:3001/hello");
      const data = await res.json();
      console.log(data);
      setHello(data.greeting);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={getHello}>Hello</button>
      <h1>{hello}</h1>
    </div>
  );
};

export default Hello;
