import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setGroupCreateorMenuOpen } from "../../../store/Groups";
import {
  createNewGroup,
  createRequest,
} from "../../../store/Groups/groupsUtils";
import { GroupContainerMenu, MenuContainer } from "./GroupMenu.styled";

const GroupMenu = () => {
  const initialState = {
    groupName: "",
    groupDescription: "",
  };

  const { GroupCreateorMenuOpen } = useSelector(
    (state: RootState) => state.Groups
  );

  const [form, setForm] = useState<createRequest>(initialState);

  const onChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const dispatch = useDispatch();

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createNewGroup(form));
    setForm(initialState);
  };

  return (
    <>
      <MenuContainer
        open={GroupCreateorMenuOpen}
        onClick={() => {
          dispatch(setGroupCreateorMenuOpen());
        }}
      ></MenuContainer>
      <GroupContainerMenu open={GroupCreateorMenuOpen}>
        <form
          onSubmit={(e: any) => {
            onSubmit(e);
          }}
        >
          <input
            onChange={(e) => onChange(e)}
            name={"groupName"}
            type="text"
            placeholder="group name"
            value={form.groupName}
          />
          <input
            name={"groupDescription"}
            onChange={(e) => onChange(e)}
            type="text"
            placeholder="group description"
            value={form.groupDescription}
          />
          <input type="submit" value="Save" />
        </form>
      </GroupContainerMenu>
    </>
  );
};

export default GroupMenu;
