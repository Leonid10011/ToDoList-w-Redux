import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/itemType";

export interface TodoState {
  items: Item[];
}

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    changeItemsName(
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) {
      const { id, name } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.name = name;
      }
    },
  },
});

export const { addItem, removeItem, changeItemsName } = todoSlice.actions;
export default todoSlice.reducer;
