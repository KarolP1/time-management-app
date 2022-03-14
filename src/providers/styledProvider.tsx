import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import {
  colorTheme as color,
  fontTheme as font,
  shadowTheme as shadow,
  transitionTheme as transition,
  sizeTheme as size,
} from "../themes";

const StyledProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={{ color }}>
      <ThemeProvider theme={{ font }}>
        <ThemeProvider theme={{ shadow }}>
          <ThemeProvider theme={{ size }}>
            <ThemeProvider theme={{ transition }}>{children}</ThemeProvider>
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default StyledProvider;
