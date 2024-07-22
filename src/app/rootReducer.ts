import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todoList/slice/todoSlice";
import projectReducer from "../features/todoList/slice/projectSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
  project: projectReducer,
});

export default rootReducer;
