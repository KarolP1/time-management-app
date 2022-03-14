import React, { ReactNode } from "react";
import RRDprovider from "./reactRouterProvider";
import ReduxProvider from "./reduxProvider";
import StyledProvider from "./styledProvider";

const CombinedProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledProvider>
      <RRDprovider>
        <ReduxProvider>{children}</ReduxProvider>
      </RRDprovider>
    </StyledProvider>
  );
};

export default CombinedProvider;
