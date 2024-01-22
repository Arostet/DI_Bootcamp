import { useState } from "react";

const BuggyCounter = (props) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  if (count > 5) {
    throw new Error("Crashed!");
  } else {
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={handleCount}>Up One</button>
      </div>
    );
  }
};

export default BuggyCounter;
