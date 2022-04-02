import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../../../../store/appInfo";
import { Logout } from "../../../../store/authentication";
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
    <Link to={destination}>
      <MenuItemButton accent={accent} onClick={() => onclickFunc()}>
        {name}
      </MenuItemButton>
    </Link>
  );
};

export const LogOutMenuItem = ({ name, accent, destination }: MenuItemI) => {
  const dispatch = useDispatch();
  const logout = function () {
    localStorage.setItem("token", "");
    dispatch(Logout());
  };
  return (
    <Link to={destination}>
      <MenuItemButton accent={accent} onClick={logout}>
        {name}
      </MenuItemButton>
    </Link>
  );
};
