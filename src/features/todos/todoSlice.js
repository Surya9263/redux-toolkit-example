import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./todo";

const initState = {
  loading: false,
  error: false,
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initState,
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, { type, payload }) => {
      state.loading = false;
      state.todos = payload;
    },
    [getTodos.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default todoSlice.reducer;
