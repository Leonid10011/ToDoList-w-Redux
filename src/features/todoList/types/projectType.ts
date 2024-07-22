import { Item } from "./itemType";

// src/features/todo/todoTypes.ts
export interface Project {
  id: string;
  name: string;
  todoItems: Item[];
}

export interface AddProjectAction {
  type: "todo/addProject";
  payload: Project;
}

export interface RemoveProjectAction {
  type: "todo/removeProject";
  payload: { id: string };
}

export type TodoActions = AddProjectAction | RemoveProjectAction;
