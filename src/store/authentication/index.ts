import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, validateToken } from "./thunkReducers";

const initialState = {
  isLoading: false,
  succesLogin: false,
  succesRegister: false,
  isTokenValid: false,
  error: {},
  response: {},
};

const authenticationReducer = createSlice({
  name: "AppInfo",
  initialState,
  reducers: {
    Logout: (state: typeof initialState) => {
      state.error = {};
      state.response = {};
      state.isLoading = false;
      state.isTokenValid = false;
      state.succesLogin = false;
      state.succesRegister = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state: typeof initialState) => {
      state.isLoading = true;
      state.succesLogin = false;
      state.succesRegister = false;
    });

    builder.addCase(
      registerUser.fulfilled,
      (state: typeof initialState, action: any) => {
        state.isLoading = false;
        state.succesRegister = true;
        state.response = action.payload;
      }
    );
    builder.addCase(
      registerUser.rejected,
      (state: typeof initialState, action: any) => {
        state.isLoading = false;
        state.succesRegister = false;
        state.error = action.payload;
      }
    );
    //login
    builder.addCase(loginUser.pending, (state: typeof initialState) => {
      state.isLoading = true;
      state.succesLogin = false;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state: typeof initialState, action: any) => {
        state.isLoading = false;
        state.succesLogin = true;
        state.succesRegister = false;

        state.response = action.payload;
      }
    );
    builder.addCase(
      loginUser.rejected,
      (state: typeof initialState, action: any) => {
        state.isLoading = false;
        state.succesLogin = false;
        state.succesRegister = false;

        state.error = action.payload;
      }
    );
    builder.addCase(
      validateToken.fulfilled,
      (state: typeof initialState, action: any) => {
        state.isTokenValid = true;
        state.isLoading = false;
        state.response = action.payload;
        state.succesLogin = true;
        state.succesRegister = true;
        state.error = {};
      }
    );
    builder.addCase(
      validateToken.rejected,
      (state: typeof initialState, action: any) => {
        state.isTokenValid = false;
        state.isLoading = false;
        state.response = {};
        state.succesLogin = false;
        state.succesRegister = false;
        state.error = action.payload;
      }
    );
  },
});
export const { Logout } = authenticationReducer.actions;

export default authenticationReducer.reducer;
