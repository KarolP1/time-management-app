import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }: { children: ReactNode }) => {
  const auth = true;
  return auth ? children : <Navigate to="/login" />;
};

export default Privateroute;
