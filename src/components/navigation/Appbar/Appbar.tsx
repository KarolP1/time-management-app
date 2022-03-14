import React, { Children, ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Burger } from "../../icons/Hamburger/Hamburger";
import {
  ABContainer,
  ABHamburgerMenuContainer,
  ABMenuContainer,
  ABTitle,
  SideMenuContainer,
} from "./Appbar.styled";

const Appbar = (props: { children: ReactNode }) => {
  const { AppName } = useSelector((state: RootState) => state.AppInfo);
  const [open, Setopen] = useState(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY < 101) setIsScrolledToTop(true);
    else setIsScrolledToTop(false);
  });
  return (
    <>
      <SideMenuContainer open={open}>hello</SideMenuContainer>
      <ABContainer IsScrolledTop={isScrolledToTop}>
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
      <div style={{ marginTop: "7rem" }}>{props.children}</div>
    </>
  );
};

export default Appbar;
