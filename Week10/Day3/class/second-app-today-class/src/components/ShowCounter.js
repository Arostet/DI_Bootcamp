import { useContext } from "react";
import { AppContext } from "../App";
import Name from "./Name";

const ShowCounter = (props) => {
  const { count } = useContext(AppContext);
  return (
    <div>
      <h1>Counter:{count}</h1>
      <Name age={props.age} />
    </div>
  );
};

export default ShowCounter;
