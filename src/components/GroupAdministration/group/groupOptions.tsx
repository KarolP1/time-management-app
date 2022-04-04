import React from "react";
import { GroupOptionContainer, MenuButton } from "./group.styled";

const GroupOption = ({
  groupId,
  isMenuOpen,
  onClick,
}: {
  isMenuOpen: boolean;
  groupId: number;
  onClick: () => void;
}) => {
  return (
    <>
      <GroupOptionContainer onClick={onClick}>
        <div></div>
        <div></div>
        <div></div>
      </GroupOptionContainer>
      <MenuButton open={isMenuOpen} numberInRow={1}>
        x
      </MenuButton>
      <MenuButton open={isMenuOpen} numberInRow={2}>
        x
      </MenuButton>
      <MenuButton open={isMenuOpen} numberInRow={3}>
        x
      </MenuButton>
    </>
  );
};

export default GroupOption;
