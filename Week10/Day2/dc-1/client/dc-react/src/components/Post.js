import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Post = (params) => {
  const [inputValue, setInputValue] = useState("");

  const inputValPost = async () => {
    console.log("Sending inputValue:", inputValue);

    try {
      const res = await axios.post("http://localhost:3001/api/hello", {
        input: inputValue,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValPost();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
