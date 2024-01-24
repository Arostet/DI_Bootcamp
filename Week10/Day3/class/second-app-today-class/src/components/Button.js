import { useContext } from "react";
import { AppContext } from "../App";

const Button = (props) => {
  const { count, setCount } = useContext(AppContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Up One</button>
    </>
  );
};

export default Button;
