const initialState = {
  count: 33,
  text: "hello",
};

export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + action.payload, text: action.text };
  } else if (action.type === DECREMENT) {
    return { ...state, count: state.count - action.payload, text: action.text };
  } else {
    return { ...state };
  }
};
