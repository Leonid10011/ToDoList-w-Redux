// src/features/todo/todoTypes.ts
export interface Item {
  id: string;
  name: string;
  finishDate: Date;
  imageLink: string;
  audioLink: string;
  subtasks: string[];
  finished: boolean;
}

export interface AddItemAction {
  type: "todo/addItem";
  payload: Item;
}

export interface RemoveItemAction {
  type: "todo/removeItem";
  payload: { id: string };
}

export type TodoActions = AddItemAction | RemoveItemAction;
