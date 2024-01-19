import React, { useState } from "react";
import Garage from "./Garage";
const Car = (props) => {
  const { name, model } = props.carinfo;
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>
        It's a {color} {name} {model}{" "}
      </h1>
      <Garage size="small" />
    </div>
  );
};

export default Car;
