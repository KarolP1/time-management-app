import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SyntheticEvent } from "react";
import { ioc } from "../../App";
export interface createRequest {
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
