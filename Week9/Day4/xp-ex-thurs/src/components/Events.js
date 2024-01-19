import React, { useState } from "react";

const Events = (props) => {
  //state to hold input value
  const [inputValue, setInputValue] = useState("");
  const [isToggleOn, setToggle] = useState(true);

  const changeToggle = () => {
    setToggle(!isToggleOn);
    // if (isToggleOn) {
    //   setToggle(false);
    // } else {
    //   setToggle(true);
    // }
  };
  const clickMe = () => {
    alert("I was clicked");
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(inputValue);
    }
  };
  return (
    <div>
      <button onClick={clickMe}>Event</button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={changeToggle}>{isToggleOn ? "on" : "off"}</button>
    </div>
  );
};

export default Events;
