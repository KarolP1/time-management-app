import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/Login";
import { Home } from "../../pages/notSignedUp";
import RegisterPage from "../../pages/register";

const SignedOut = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<div>help</div>} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};

export default SignedOut;
