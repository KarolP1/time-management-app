import { configureStore } from "@reduxjs/toolkit";
import AppInfoReducer from "./appInfo";
import AuthenticationReducer from "./authentication";
import GroupReducer from "./Groups";
import userReducer from "./User";

export const store = configureStore({
  reducer: {
    AppInfo: AppInfoReducer,
    Auth: AuthenticationReducer,
    Groups: GroupReducer,
    User: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
