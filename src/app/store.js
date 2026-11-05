//! ---------------------------------------- Import
import { userSlice } from "@/features";
import { configureStore } from "@reduxjs/toolkit";
//! ---------------------------------------- Functions
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
//! ---------------------------------------- Export
export default store;
