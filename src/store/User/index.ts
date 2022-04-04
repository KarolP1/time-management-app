import { createSlice } from "@reduxjs/toolkit";
import { User } from "./user.reducer";
const initialState: User = {
  id: null,
  first_name: null,
  last_name: null,
  email: null,
  role: null,
};
const userReducer = createSlice({
  name: "Groups",
  initialState,
  reducers: {
    resetGroups: (state) => {
      state = initialState;
    },
    readToken: (state: User, action: any) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.role = action.payload.role;
    },
  },
});

export const { resetGroups, readToken } = userReducer.actions;

export default userReducer.reducer;