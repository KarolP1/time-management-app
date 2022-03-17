import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../../../../store/appInfo";
import { MenuItemButton } from "./menuItem.styled";

interface MenuItemI {
  name: string;
  destination: string;
  accent: boolean;
}

export const MenuItem = ({ name, accent, destination }: MenuItemI) => {
  const dispatch = useDispatch();
  const onclickFunc = () => {
    dispatch(toggleMenu());
  };
  return (
    <MenuItemButton accent={accent} onClick={() => onclickFunc()}>
      <Link to={destination}>{name}</Link>
    </MenuItemButton>
  );
};
