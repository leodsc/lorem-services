import { createSlice } from "@reduxjs/toolkit";

const menuSlicer = createSlice({
  name: "menu",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = menuSlicer.actions;
export default menuSlicer.reducer;
