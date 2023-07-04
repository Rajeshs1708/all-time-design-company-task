import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  selectedTask: {},
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    getTask: (state, action) => {
      state.taskList = action.payload.map((task) => {
        return {
          id: task.id,
          task_date: task.task_date,
          task_time: task.task_time,
          is_completed: task.is_completed,
          task_msg: task.task_msg,
          time_zone: task.time_zone,
        };
      });
    },
    addTask: (state, action) => {
      state.taskList.push(action.payload);
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

export const { getTask, addTask, updateTaskInList, setSelectedTask } =
  taskSlice.actions;
export default taskSlice.reducer;
