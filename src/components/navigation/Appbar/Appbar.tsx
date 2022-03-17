import React, { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { toggleMenu } from "../../../store/appInfo";
import { Burger } from "../../icons/Hamburger/Hamburger";
import SideMenu from "../SideMenu";
import {
  ABContainer,
  ABHamburgerMenuContainer,
  ABMenuContainer,
  ABTitle,
  SideMenuContainer,
} from "./Appbar.styled";

const Appbar = (props: { children: ReactNode }) => {
  const { AppName, isLoggedIn, isMenuOpen } = useSelector(
    (state: RootState) => state.AppInfo
  );
  const [isScrolledToTop, setIsScrolledToTop] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY < 101) setIsScrolledToTop(true);
    else setIsScrolledToTop(false);
  });
  const dispatch = useDispatch();
  return (
    <>
      <SideMenuContainer open={isMenuOpen}>
        <SideMenu isUserAuth={isLoggedIn} />
      </SideMenuContainer>
      <ABContainer IsScrolledTop={isScrolledToTop}>
        <ABTitle>{AppName}</ABTitle>
        <ABMenuContainer>AppbarMenu</ABMenuContainer>
        <ABHamburgerMenuContainer>
          <Burger
            open={isMenuOpen}
            setOpen={() => {
              dispatch(toggleMenu());
            }}
            size={0.8}
          />
        </ABHamburgerMenuContainer>
      </ABContainer>
      <>{props.children}</>
    </>
  );
};

export default Appbar;
