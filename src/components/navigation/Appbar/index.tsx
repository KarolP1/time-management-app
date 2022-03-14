import React, { ReactNode } from "react";
import Appbar from "./Appbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Appbar>{children}</Appbar>;
};

export default Layout;
