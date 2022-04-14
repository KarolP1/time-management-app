import { createSlice } from "@reduxjs/toolkit";
import GroupNewUser from "../../components/GroupAdministration/group/GroupNewUser";
import {
  createNewGroup,
  deleteGroup,
  editGroup,
  getMyGroups,
} from "./groupsUtils";

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
  res: any;
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

    //#region delete group

    builder.addCase(
      deleteGroup.fulfilled,
      (state: groupsInterface, action: any) => {
        state.groups = state.groups?.filter(
          (group) => group.id !== action.payload
        );
        state.isGroupLoading = false;
        state.succes = true;
      }
    );
    builder.addCase(deleteGroup.pending, (state: groupsInterface) => {
      state.isGroupLoading = false;
      state.errors = {};
      state.succes = false;
    });
    builder.addCase(
      deleteGroup.rejected,
      (state: groupsInterface, action: any) => {
        state.errors = action.payload;
      }
    );
    //#end region delete group

    builder.addCase(
      editGroup.pending,
      (state: groupsInterface, action: any) => {
        state.isGroupLoading = true;
        state.errors = {};
        state.succes = false;
      }
    );
    builder.addCase(
      editGroup.rejected,
      (state: groupsInterface, action: any) => {
        state.isGroupLoading = false;
        state.errors = action.payload;
      }
    );
    builder.addCase(
      editGroup.fulfilled,
      (state: groupsInterface, action: any) => {
        state.isGroupLoading = false;
        state.errors = {};
        state.succes = true;
        state.res = action.payload;
      }
    );
  },
});

export const { resetGroups, setGroupCreateorMenuOpen } = groupReducer.actions;

export default groupReducer.reducer;
