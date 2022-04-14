import React, { useEffect } from "react";
import { GroupOptionContainer, MenuButton } from "./group.styled";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import { deleteGroup } from "../../../store/Groups/groupsUtils";
import { MenuType } from "../../../pages/SignedIn/homepage/homepage";

export interface GroupOptionI extends MenuType {
  isMenuOpen: boolean;
  groupId: number;
  onClick: () => void;
}

const GroupOption = ({
  groupId,
  isMenuOpen,
  onClick,
  setType,
  setGroupId,
}: GroupOptionI) => {
  const colortheme = useSelector((state: RootState) => state.AppInfo.Mytheme);
  const dispatch = useDispatch();

  return (
    <>
      <GroupOptionContainer
        onClick={() => {
          setType(undefined);
          onClick();
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </GroupOptionContainer>
      <MenuButton
        onClick={() => {
          setType("edit");
          setGroupId(groupId);
          onClick();
        }}
        open={isMenuOpen}
        numberInRow={1}
      >
        <AiOutlineEdit color={colortheme.color.secondaryMedium} size={24} />
      </MenuButton>
      <MenuButton
        onClick={() => {
          setType("add");
          setGroupId(groupId);
          onClick();
        }}
        open={isMenuOpen}
        numberInRow={2}
      >
        <AiOutlinePlusCircle
          color={colortheme.color.secondaryMedium}
          size={24}
        />
      </MenuButton>
      <MenuButton
        onClick={() => {
          dispatch(deleteGroup({ groupId }));
          onClick();
        }}
        open={isMenuOpen}
        numberInRow={3}
      >
        <AiOutlineDelete color={colortheme.color.secondaryMedium} size={24} />
      </MenuButton>
    </>
  );
};

export default GroupOption;
