import { useContext } from "react";
import { AppContext } from "../App";
import { DisplayContext } from "./Display";

const Name = (props) => {
  const { name } = useContext(AppContext);
  const { email } = useContext(DisplayContext);
  return (
    <>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{props.age}</h3>
    </>
  );
};

export default Name;
