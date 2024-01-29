import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [],
};

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const newToDo = {
        id: state.toDos.length + 1,
        title: action.payload,
        completed: false,
      };
      state.toDos.push(newToDo);
    },
    remove: (state, action) => {
      const index = state.toDos.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.toDos.splice(index, 1);
      }
    },
    toggleComplete: (state, action) => {
      const index = state.toDos.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.toDos[index].completed = !state.toDos[index].completed;
      }
    },
  },
});

export const { add, remove, toggleComplete } = toDoListSlice.actions;

export default toDoListSlice.reducer;
