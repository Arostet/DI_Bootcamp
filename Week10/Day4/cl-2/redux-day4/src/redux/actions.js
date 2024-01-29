import { DECREMENT, INCREMENT } from "./counterReducer";

export const increment = (value, text) => {
  return {
    type: INCREMENT,
    payload: value,
    text,
  };
};

export const decrement = (value, text) => {
  return {
    type: DECREMENT,
    payload: value,
    text,
  };
};
