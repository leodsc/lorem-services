import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducer/navigation/menuReducer";

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
});
