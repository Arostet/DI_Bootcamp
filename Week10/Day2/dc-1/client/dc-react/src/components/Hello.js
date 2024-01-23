import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Hello = (props) => {
  const [hello, setHello] = useState("");
  const params = useParams();

  useEffect(() => {
    getHello();
  }, []);

  const getHello = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/hello");
      setHello(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>{hello}</h1>
    </div>
  );
};

export default Hello;
