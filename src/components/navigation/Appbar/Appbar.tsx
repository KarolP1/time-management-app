import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Burger } from "../../icons/Hamburger/Hamburger";
import {
  ABContainer,
  ABHamburgerMenuContainer,
  ABMenuContainer,
  ABTitle,
} from "./Appbar.styled";

const Appbar = () => {
  const { AppName } = useSelector((state: RootState) => state.AppInfo);
  const [open, Setopen] = useState(false);
  return (
    <>
      {/* <>sideMenu</> */}
      <ABContainer>
        <ABTitle>{AppName}</ABTitle>
        <ABMenuContainer>AppbarMenu</ABMenuContainer>
        <ABHamburgerMenuContainer>
          <Burger
            open={open}
            setOpen={() => {
              Setopen(!open);
            }}
            size={0.8}
          />
        </ABHamburgerMenuContainer>
      </ABContainer>
    </>
  );
};

export default Appbar;
