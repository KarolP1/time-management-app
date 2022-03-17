import React from "react";
import { MenuItem } from "./MenuItem/MenuItem";

const SignedOutMenuItems = () => {
  return (
    <>
      <MenuItem name="home" accent={false} destination="/" />
      <MenuItem name="help" accent={false} destination="/help" />
      <MenuItem name="Login" accent={true} destination="/login" />
      <MenuItem name="register" accent={true} destination="/register" />
    </>
  );
};

export default SignedOutMenuItems;
