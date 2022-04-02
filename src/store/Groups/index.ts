import { createSlice } from "@reduxjs/toolkit";
import { createNewGroup, getMyGroups } from "./groupsUtils";

export interface UserInfo {
  email: string;
  first_name: string;
  last_name: string;
  id: number;
}

export interface Group {
  id: number;
  GroupName: string;
  GroupDescription: string;
  ownerInfo: UserInfo;
  AllUsersInfo: UserInfo[];
  createdByUserId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface groupsInterface {
  isGroupLoading: boolean;
  errors?: {};
  succes: boolean;
  GroupCreateorMenuOpen: boolean;
  //get groups
  groups?: Group[];
}

const initialState = {
  groups: undefined,
  isGroupLoading: false,
  errors: {},
  succes: false,
  GroupCreateorMenuOpen: false,
} as groupsInterface;

const groupReducer = createSlice({
  name: "Groups",
  initialState,
  reducers: {
    resetGroups: (state) => {
      state = initialState;
    },
    setGroupCreateorMenuOpen: (state) => {
      state.GroupCreateorMenuOpen = !state.GroupCreateorMenuOpen;
    },
  },
  extraReducers: (builder) => {
    //createNewGroup
    builder.addCase(createNewGroup.pending, (state: groupsInterface) => {
      state.isGroupLoading = true;
      state.groups = [];
      state.errors = {};
      state.GroupCreateorMenuOpen = true;
      state.succes = false;
    });
    builder.addCase(createNewGroup.fulfilled, (state: groupsInterface) => {
      state.isGroupLoading = false;
      state.succes = true;
      state.GroupCreateorMenuOpen = false;
    });
    builder.addCase(
      createNewGroup.rejected,
      (state: groupsInterface, action: any) => {
        state.errors = action.payload;
        state.isGroupLoading = false;
        state.succes = false;
      }
    );
    //get all groups
    builder.addCase(getMyGroups.pending, (state: typeof initialState) => {
      state.isGroupLoading = true;
      state.errors = {};
      state.groups = [];
      state.succes = false;
    });
    builder.addCase(
      getMyGroups.rejected,
      (state: groupsInterface, action: any) => {
        state.errors = action.payload;
        state.succes = false;
        state.isGroupLoading = false;
      }
    );
    builder.addCase(
      getMyGroups.fulfilled,
      (state: groupsInterface, action: any) => {
        state.errors = {};
        state.groups = action.payload;
        state.succes = false;
        state.isGroupLoading = false;
      }
    );
  },
});

export const { resetGroups, setGroupCreateorMenuOpen } = groupReducer.actions;

export default groupReducer.reducer;
