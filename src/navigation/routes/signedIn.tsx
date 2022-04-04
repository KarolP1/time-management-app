import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../pages/SignedIn/homepage/homepage";
import { readToken } from "../../store/User";
import { ReadToken } from "../../store/User/user.reducer";

const SignedIn = () => {
  const token = localStorage.getItem("token") || "";
  const data = ReadToken(token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readToken(data));
  }, [dispatch, data]);

  console.log(data);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default SignedIn;
