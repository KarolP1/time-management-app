import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import {
  colorTheme as color,
  fontTheme as font,
  shadowTheme as shadow,
  transitionTheme as transition,
  sizeTheme as size,
} from "../themes";

export const Mytheme = {
  color,
  font,
  shadow,
  size,
  transition,
};
const StyledProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={Mytheme}>{children}</ThemeProvider>;
};

export default StyledProvider;
