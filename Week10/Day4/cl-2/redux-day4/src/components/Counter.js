import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions";

const Counter = (props) => {
  return (
    <>
      Count : {props.count}
      <button onClick={() => props.setCount(10)}>Add</button>
      <button onClick={() => props.setMinus(7)}>Subtract</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProch = (dispatch) => {
  return {
    setCount: (val) => dispatch(increment(val)),
    setMinus: (val) => dispatch(decrement(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProch)(Counter);
