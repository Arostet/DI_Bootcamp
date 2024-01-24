import { useState, useRef } from "react";

const CharacterCounter = (props) => {
  const inputRef = useRef();
  const [len, setLen] = useState(0);
  const handleInput = () => {
    setLen(inputRef.current.value.length);
  };
  return (
    <div>
      <input ref={inputRef} onChange={handleInput} />
      <h1>{len}</h1>
    </div>
  );
};

export default CharacterCounter;
