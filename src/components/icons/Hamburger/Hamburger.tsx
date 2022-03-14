import React from "react";

import { StyledBurger } from "./Hamburger.styled";

type BurgerProps = {
  setOpen(): void;
  open: boolean;
  size: number;
};

export const Burger = (props: BurgerProps) => {
  const { setOpen, open, size } = props;

  return (
    <StyledBurger onClick={setOpen} open={open} size={size}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
