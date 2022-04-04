import React from "react";
import { GroupOptionContainer, MenuButton } from "./group.styled";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";

const GroupOption = ({
  groupId,
  isMenuOpen,
  onClick,
}: {
  isMenuOpen: boolean;
  groupId: number;
  onClick: () => void;
}) => {
  const colortheme = useSelector((state: RootState) => state.AppInfo.Mytheme);

  return (
    <>
      <GroupOptionContainer onClick={onClick}>
        <div></div>
        <div></div>
        <div></div>
      </GroupOptionContainer>
      <MenuButton open={isMenuOpen} numberInRow={1}>
        <AiOutlineEdit color={colortheme.color.secondaryMedium} size={"2rem"} />
      </MenuButton>
      <MenuButton open={isMenuOpen} numberInRow={2}>
        <AiOutlineDelete
          color={colortheme.color.secondaryMedium}
          size={"2rem"}
        />
      </MenuButton>
      <MenuButton open={isMenuOpen} numberInRow={3}>
        <AiOutlinePlusCircle
          color={colortheme.color.secondaryMedium}
          size={"2rem"}
        />
      </MenuButton>
    </>
  );
};

export default GroupOption;
