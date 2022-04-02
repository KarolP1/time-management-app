import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../../../store";
import { registerUser } from "../../../../store/authentication/thunkReducers";
import {
  ImageContainer,
  LForm,
  LoginContainer,
  SubmitButton,
} from "../Auth.styled";
import logo from "./pngegg.png";

export interface authRegister {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}

const initialState = {
  first_name: "",
  last_name: "",
  password: "",
  email: "",
};

const RegisterPage = () => {
  const [authForm, setAuthForm] = useState<authRegister>(initialState);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const succes = useSelector((state: RootState) => state.Auth.succesRegister);

  const sumbmitRegisterRequest = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(registerUser(authForm));
    setAuthForm(initialState);
  };

  useEffect(() => {
    if (succes === true) navigate("/login");
    if (succes === false) navigate("/register");
  }, [succes, navigate]);

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <img src={logo} alt="someimage" />
      </ImageContainer>
      <LForm
        onSubmit={(e: React.SyntheticEvent) => {
          sumbmitRegisterRequest(e);
        }}
      >
        <h1>register</h1>
        <input
          value={authForm.first_name}
          name="first_name"
          placeholder="first_name"
          type={"text"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateInput(e);
          }}
        />
        <input
          value={authForm.last_name}
          name="last_name"
          placeholder="last_name"
          type={"text"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateInput(e);
          }}
        />
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
        <SubmitButton type="submit" name="submit" value="Register" />
        <Link to="/login">Did you have account? Login here now</Link>
      </LForm>
    </LoginContainer>
  );
};

export default RegisterPage;
