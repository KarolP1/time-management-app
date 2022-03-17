import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LForm, LoginContainer, SubmitButton } from "./Login.styled";
import logo from "./pngegg.png";

interface authLogin {
  login: string;
  password: string;
}

const LoginPage = () => {
  const [authForm, setAuthForm] = useState<authLogin>({
    login: "",
    password: "",
  });

  const sumbmitLoginRequest = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(authForm);
  };

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  return (
    <LoginContainer>
      <img src={logo} alt="someimage" />
      <LForm
        onSubmit={(e: React.SyntheticEvent) => {
          sumbmitLoginRequest(e);
        }}
      >
        <input
          value={authForm.login}
          name="login"
          placeholder="Login"
          type={"text"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateInput(e);
          }}
        />
        <input
          value={authForm.password}
          name="password"
          placeholder="password"
          type={"password"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateInput(e);
          }}
        />
        <SubmitButton type="submit" name="submit" value="Login" />
        <Link to="/register">Dont have account? Register right now</Link>
      </LForm>
    </LoginContainer>
  );
};

export default LoginPage;
