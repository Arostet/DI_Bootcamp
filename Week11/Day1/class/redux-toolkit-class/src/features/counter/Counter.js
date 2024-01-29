import { UseDispatch, useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByNumber,
  incrementWithPrepare,
} from "./counterSlice";

const Counter = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div>
        <input />
        <button
          onClick={() => dispatch(incrementByNumber({ num1: 5, num2: 6 }))}
        >
          Increment By Above
        </button>
        <button onClick={() => dispatch(incrementWithPrepare(15, 16))}>
          Increment By Above With Prepare
        </button>
      </div>
    </>
  );
};
export default Counter;
