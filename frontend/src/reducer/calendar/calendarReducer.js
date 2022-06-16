import { createSlice } from "@reduxjs/toolkit";

const calendarReducer = createSlice({
  name: "calendar",
  initialState: {
    daySelected: new Date(),
  },
  reducers: {
    change: (state, action) => {
      console.log("action", action);
      state.daySelected = action.payload.date;
    },
  },
});

export const { change } = calendarReducer.actions;
export default calendarReducer.reducer;
