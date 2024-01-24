import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const HelloName = (props) => {
  const [greeting, setGreeting] = useState();
  const params = useParams();

  const getHello = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/hello/${input}`);
      setGreeting(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default HelloName;
