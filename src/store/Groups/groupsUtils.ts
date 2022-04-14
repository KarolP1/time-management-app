import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SyntheticEvent } from "react";
import { ioc } from "../../App";
import { EditState } from "../../components/GroupAdministration/group/GroupEditGroup";
export interface createRequest {
  groupName: string;
  groupDescription: string;
}

export interface DeleteGroup {
  groupId: number;
}
export interface EditGroup {
  groupId: number;
  groupName: string;
  groupDescription: string;
}

export const createNewGroup = createAsyncThunk(
  "groups/create",
  async (state: createRequest, { rejectWithValue }) => {
    try {
      const { groupName, groupDescription } = state;
      const token = localStorage.getItem("token") || "";

      const response = await axios.post(
        "http://localhost:8080/api/v1/group/create",
        {
          groupName: groupName,
          description: groupDescription,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      ioc.emit("group/create", {
        groupName: groupName,
        groupDescription: groupDescription,
      });

      return response.data.message.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteGroup = createAsyncThunk(
  "groups/delete",
  async (state: DeleteGroup, { rejectWithValue }) => {
    try {
      const { groupId } = state;
      const token = localStorage.getItem("token") || "";

      await axios.delete(
        `http://localhost:8080/api/v1/group/delete/${groupId}`,

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      ioc.emit("group/delete", {
        groupId: groupId,
      });

      return groupId;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getMyGroups = createAsyncThunk(
  "groups/getMy",
  async (_: SyntheticEvent | void, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token") || "";

      const response = await axios.get(
        "http://localhost:8080/api/v1/group/getMyGroups",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return response.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

interface editThunkInterface extends EditState {
  groupId: number | null | undefined;
}

export const editGroup = createAsyncThunk(
  "groups/edit",
  async (state: editThunkInterface, { rejectWithValue }) => {
    try {
      const { description, title, groupId } = state;
      const token = localStorage.getItem("token") || "";

      const res = await axios.put(
        `http://localhost:8080/api/v1/group/update/${groupId}`,
        {
          groupName: title,
          groupDescription: description,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // ioc.emit("group/delete", {
      //   groupId: groupId,
      // });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
