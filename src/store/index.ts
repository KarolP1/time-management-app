import { configureStore } from "@reduxjs/toolkit";
import AppInfoReducer from "./appInfo";

export const store = configureStore({
  reducer: { AppInfo: AppInfoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
