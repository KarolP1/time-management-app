import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { LogOutMenuItem, MenuItem } from "./MenuItem/MenuItem";

const MenuItems = () => {
  const isLoggedInState = useSelector(
    (state: RootState) => state.Auth.isTokenValid
  );

  if (!isLoggedInState)
    return (
      <>
        <MenuItem name="home" accent={false} destination="/" />
        <MenuItem name="help" accent={false} destination="/help" />
        <MenuItem name="Login" accent={true} destination="/login" />
        <MenuItem name="register" accent={true} destination="/register" />
      </>
    );
  else
    return (
      <>
        <LogOutMenuItem name="Logout" accent={true} destination="/" />
      </>
    );
};

export default MenuItems;
