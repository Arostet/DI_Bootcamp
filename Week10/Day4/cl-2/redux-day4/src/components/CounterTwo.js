import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions";

const CounterTwo = (props) => {
  const { count, text } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      Count : {count} <p>{text}</p>
      <button onClick={() => dispatch(increment(1, "by 1"))}>Add</button>
      <button onClick={() => dispatch(decrement(3, "by 3"))}>Subtract</button>
    </>
  );
};
export default CounterTwo;
