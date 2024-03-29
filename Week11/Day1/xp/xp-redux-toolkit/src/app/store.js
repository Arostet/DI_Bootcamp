import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "../features/todos/toDoListSlice";
import usersReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    toDo: toDoListReducer,
    users: usersReducer,
  },
});

export default store;
