import { createSlice } from "@reduxjs/toolkit";
import { AppInfo } from "./interface";

const initialState: AppInfo = {
  AppName: "ChronoMetr",
  isLoggedIn: false,
};

const AppInfoReducer = createSlice({
  name: "AppInfo",
  initialState,
  reducers: {},
});

export default AppInfoReducer.reducer;
