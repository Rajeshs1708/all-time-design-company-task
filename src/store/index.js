import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../reducers/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
