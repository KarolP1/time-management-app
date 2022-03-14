import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const RRDprovider = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RRDprovider;
