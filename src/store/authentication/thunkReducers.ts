import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authLogin } from "../../pages/notSignedUp/auth/Login";

export interface userInterface {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user: userInterface, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        user
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (user: authLogin, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        user
      );
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const validateToken = createAsyncThunk(
  "users/validateToken",
  async ({ token }: { token: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/authenticated",
        token,
        { headers: { Authorization: "Bearer " + token } }
      );
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
