import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  selectedTask: {},
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      const id = Math.random() * 100;
      const task = { ...action.payload, id };
      state.taskList.push(task);
    },
    removeTaskFromList: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTaskInList: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export const {
  addTaskToList,
  removeTaskFromList,
  updateTaskInList,
  setSelectedTask,
} = taskSlice.actions;
export default taskSlice.reducer;
