import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../reducer/calendar/calendarReducer";
import menuReducer from "../reducer/navigation/menuReducer";

export default configureStore({
  reducer: {
    menu: menuReducer,
    calendar: calendarReducer,
  },
});
