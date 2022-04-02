import { configureStore } from "@reduxjs/toolkit";
import AppInfoReducer from "./appInfo";
import AuthenticationReducer from "./authentication";
import GroupReducer from "./Groups";

export const store = configureStore({
  reducer: {
    AppInfo: AppInfoReducer,
    Auth: AuthenticationReducer,
    Groups: GroupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
