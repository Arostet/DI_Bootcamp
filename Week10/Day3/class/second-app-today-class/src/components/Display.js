import ShowCounter from "./ShowCounter";
import { createContext } from "react";

export const DisplayContext = createContext();

const Display = (props) => {
  return (
    <>
      <DisplayContext.Provider value={{ email: "aaa@aaa.com" }}>
        <ShowCounter age={26} />
      </DisplayContext.Provider>
    </>
  );
};

export default Display;
