import { createSlice } from "@reduxjs/toolkit";

let initState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",

  initialState: initState,
  reducers: {
    increase: (state) => {
      state.counter += 1;
    },
    decrease: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
    decrementBy: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const { increase, decrease, incrementBy, decrementBy } =
  counterSlice.actions;

export default counterSlice.reducer;
