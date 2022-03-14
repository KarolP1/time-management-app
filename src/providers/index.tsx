import React, { ReactNode } from "react";
import ReduxProvider from "./reduxProvider";
import StyledProvider from "./styledProvider";

const CombinedProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </StyledProvider>
  );
};

export default CombinedProvider;
