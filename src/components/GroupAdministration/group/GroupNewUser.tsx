import React, { Dispatch, SetStateAction, useRef } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { FormContainer, MenuOptionsContainer } from "./group.styled";

const GroupNewUser = ({
  groupId,
  setType,
}: {
  groupId: number | null | undefined;
  setType: Dispatch<SetStateAction<"edit" | "add" | undefined>>;
}) => {
  const ref = useRef<HTMLDivElement>();
  useOutsideClick(ref, () => setType(undefined));
  return (
    <MenuOptionsContainer>
      <FormContainer ref={ref}>
        <button onClick={() => setType(undefined)}>X</button>
      </FormContainer>
    </MenuOptionsContainer>
  );
};

export default GroupNewUser;
