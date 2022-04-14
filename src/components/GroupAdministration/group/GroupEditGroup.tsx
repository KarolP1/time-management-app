import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { SubmitButton } from "../../../pages/notSignedUp/auth/Auth.styled";
import { Group } from "../../../store/Groups";
import { editGroup } from "../../../store/Groups/groupsUtils";
import {
  CloseButton,
  FormContainer,
  MenuOptionsContainer,
} from "./group.styled";

export interface EditState {
  title: string;
  description: string;
}
const initialState: EditState = {
  title: "",
  description: "",
};

export interface groupEditGroup {
  groupId: number | null | undefined;
  setType: Dispatch<SetStateAction<"edit" | "add" | undefined>>;
  group: Group | undefined;
}
const GroupEditGroup = ({ groupId, setType, group }: groupEditGroup) => {
  const ref = useRef<HTMLDivElement>();
  useOutsideClick(ref, () => setType(undefined));

  const [editState, setEditState] = useState<EditState>(initialState);
  const dispatch = useDispatch();

  const onSubmit = function (e: React.SyntheticEvent) {
    e.preventDefault();
    if (editState !== initialState) {
      dispatch(
        editGroup({
          groupId: groupId,
          description: editState.description,
          title: editState.title,
        })
      );
      setEditState(initialState);
      setType(undefined);
    }
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setEditState({ ...editState, [e.target.name]: e.target.value });
  };

  return (
    <MenuOptionsContainer>
      <FormContainer ref={ref} onSubmit={onSubmit}>
        <CloseButton onClick={() => setType(undefined)}>X</CloseButton>
        <div style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="title"
            value={editState?.title}
            name="title"
            onChange={onChange}
          />
          <textarea
            placeholder="description"
            value={editState?.description}
            name="description"
            onChange={onChange}
          />
        </div>
        <SubmitButton type="submit">edit this group</SubmitButton>
      </FormContainer>
    </MenuOptionsContainer>
  );
};

export default GroupEditGroup;
