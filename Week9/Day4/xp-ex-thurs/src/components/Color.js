import React, { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavColor] = useState("red");
  const [greenColor, setGreen] = useState(true);
  useEffect(() => {
    // alert("useEffect reached");
    setFavColor("yellow");
  }, [greenColor]);
  const changeColor = () => {
    setFavColor("blue");
  };
  const changeToGreen = () => {
    setGreen(!greenColor);
  };
  return (
    <div>
      <h1>My favorite color is {favoriteColor}.</h1>
      <button onClick={changeColor}>Change Colors</button>
      <button onClick={changeToGreen}>Change To Green</button>
    </div>
  );
};

export default Color;
