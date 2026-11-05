//! ---------------------------------------- Import
import { AUTH_STORAGE_KEYS } from "@/data";
import {
  getDataFromLocalStorage,
  removeFromLocalStorage,
  setDataToLocalStorage,
} from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
//! ---------------------------------------- Variables
const initialState = {
  user: {
    userInfo: getDataFromLocalStorage(AUTH_STORAGE_KEYS.USER) || null,
    access_token:
      getDataFromLocalStorage(AUTH_STORAGE_KEYS.ACCESS_TOKEN) || null,
    refresh_token:
      getDataFromLocalStorage(AUTH_STORAGE_KEYS.REFRESH_TOKEN) || null,
  },
  isLoading: true,
  message: null,
};
//! ---------------------------------------- Redux
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //! -------------------- loginSuccess
    loginSuccess: (state, action) => {
      const { user, access_token, refresh_token } = action.payload;

      state.user.userInfo = user ?? null;
      state.user.access_token = access_token ?? null;
      state.user.refresh_token = refresh_token ?? null;

      setDataToLocalStorage(AUTH_STORAGE_KEYS.USER, state.user.userInfo);

      setDataToLocalStorage(
        AUTH_STORAGE_KEYS.ACCESS_TOKEN,
        state.user.access_token,
      );

      setDataToLocalStorage(
        AUTH_STORAGE_KEYS.REFRESH_TOKEN,
        state.user.refresh_token,
      );

      state.isLoading = false;
    },

    //! -------------------- loginFailed
    loginFailed: (state, action) => {
      state.isLoading = false;
      state.message = action.payload ?? null;
    },
    //! -------------------- logOut
    logOut: (state, action) => {
      removeFromLocalStorage(AUTH_STORAGE_KEYS.USER);
      removeFromLocalStorage(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
      removeFromLocalStorage(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
      state.user = {};
      state.isLoading = false;
      state.message = action.payload ?? null;
    },
  },
});
//! ---------------------------------------- Export
export default userSlice.reducer;
export const { loginSuccess, loginFailed, logOut } = userSlice.actions;
