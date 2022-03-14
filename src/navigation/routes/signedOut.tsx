import React from "react";
import { Routes, Route } from "react-router-dom";

const SignedOut = () => {
  return (
    <Routes>
      <Route path="/" element={<div>hello home</div>} />
    </Routes>
  );
};

export default SignedOut;
