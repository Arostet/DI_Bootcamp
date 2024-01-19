import React, { useState } from "react";

const Phone = (props) => {
  const [isBrand, setBrand] = useState("Samsung");
  const [isModel, setModel] = useState("Galaxy S20");
  const [isColor, setColor] = useState("black");
  const [isYear, setYear] = useState("2020");

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>My phone is a {isBrand}.</h1>
      <h2>
        It is a {isColor} {isModel} from {isYear}
      </h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Phone;
