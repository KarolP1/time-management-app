import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../../../store";
import { loginUser } from "../../../../store/authentication/thunkReducers";
import {
  ImageContainer,
  LForm,
  LoginContainer,
  SubmitButton,
} from "../Auth.styled";
import logo from "../../../../assets/images/pngegg.png";

export interface authLogin {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [authForm, setAuthForm] = useState<authLogin>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const succes = useSelector((state: RootState) => state.Auth.succesLogin);
  const sumbmitLoginRequest = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUser(authForm));
  };

  useEffect(() => {
    if (succes === true) {
      navigate("/");
    }
    if (succes === false) navigate("/login");
  }, [succes, navigate, dispatch]);

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <img src={logo} alt="logo" />
      </ImageContainer>
      <LForm onSubmit={sumbmitLoginRequest}>
        <input
          value={authForm.email}
          name="email"
          placeholder="Email"
          type={"email"}
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
        <SubmitButton type="submit" name="submit">
          Login
        </SubmitButton>
        <Link to="/register">You didn't have account? Register now!</Link>
      </LForm>
    </LoginContainer>
  );
};

export default LoginPage;
