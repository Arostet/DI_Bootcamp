import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../features/tasks/tasksReducer";
export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
