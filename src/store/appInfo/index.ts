import { createSlice } from "@reduxjs/toolkit";
import { Mytheme } from "../../providers/styledProvider";

const initialState = {
  AppName: "Chrono",
  isLoggedIn: false,
  Mytheme: Mytheme,
  isMenuOpen: false,
};

const AppInfoReducer = createSlice({
  name: "AppInfo",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    loginSet: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
export const { toggleMenu, loginSet } = AppInfoReducer.actions;

export default AppInfoReducer.reducer;
