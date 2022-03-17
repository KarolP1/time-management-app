import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SignedIn from "./signedIn";
import SignedOut from "./signedOut";
import { Container } from "./style.styled";

const MyRoutes = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.AppInfo);
  return <Container>{isLoggedIn ? <SignedIn /> : <SignedOut />}</Container>;
};

export default MyRoutes;
