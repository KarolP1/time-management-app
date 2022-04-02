import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { validateToken } from "../../store/authentication/thunkReducers";
import SignedIn from "./signedIn";
import SignedOut from "./signedOut";
import { Container } from "./style.styled";

const MyRoutes = () => {
  const token = localStorage.getItem("token") || "";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validateToken({ token }));
  }, [token, dispatch]);
  const { isTokenValid } = useSelector((state: RootState) => state.Auth);
  return <Container>{isTokenValid ? <SignedIn /> : <SignedOut />}</Container>;
};

export default MyRoutes;
