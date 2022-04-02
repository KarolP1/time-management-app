import React from "react";
import { SidemenuContainer } from "./Sidemenu.styled";
import SignedOutMenuItems from "./MenuItems";

const SideMenu = ({ isUserAuth }: { isUserAuth: boolean }) => {
  return (
    <SidemenuContainer>
      {isUserAuth ? "signedIn" : <SignedOutMenuItems />}
    </SidemenuContainer>
  );
};

export default SideMenu;
