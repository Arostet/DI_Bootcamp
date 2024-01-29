import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 22,
};
export const counterSlice = createSlice({
  name: "counter", //counter/increment , counter/action
  initialState: initialState,
  reducers: {
    increment: (state) => {
      //counter/increment
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    incrementByNumber: (state, action) => {
      state.count += action.payload.num1 += action.payload.num2;
    },
    incrementWithPrepare: {
      reducer(state, action) {
        state.count += action.payload.a + action.payload.b;
      },
      prepare(num1, num2) {
        return { payload: { a: num1, b: num2 } };
      },
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByNumber,
  incrementWithPrepare,
} = counterSlice.actions;

export default counterSlice.reducer;
