import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../types/projectType";

export interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<Project>) {
      state.projects.push(action.payload);
    },
    removeProject(state, action: PayloadAction<{ id: string }>) {
      state.projects.filter((project) => project.id != action.payload.id);
    },
  },
});

const { addProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;
