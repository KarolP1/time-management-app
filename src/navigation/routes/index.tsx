import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SignedIn from "./signedIn";
import SignedOut from "./signedOut";

const MyRoutes = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.AppInfo);
  return isLoggedIn ? <SignedIn /> : <SignedOut />;
};

export default MyRoutes;
