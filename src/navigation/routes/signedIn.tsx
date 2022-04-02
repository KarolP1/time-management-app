import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../pages/SignedIn/homepage/homepage";

const SignedIn = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default SignedIn;
