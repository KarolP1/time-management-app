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
  },
});
export const { toggleMenu } = AppInfoReducer.actions;

export default AppInfoReducer.reducer;
