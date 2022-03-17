import styled from "styled-components";

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primaryLightest};
  margin: auto 0;
  justify-content: center;

  img {
    padding: 5rem;
    padding-bottom: 2rem;
  }
`;

export const LForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;

  input {
    margin: 2rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.color.primaryDark};

    &:focus {
      border-color: ${({ theme }) => theme.color.secondaryDark};
    }
  }
  a {
    color: ${({ theme }) => theme.color.primaryDark};
    text-align: center;
    font-size: 1.5rem;
    text-decoration: none;

    &:active {
      color: ${({ theme }) => theme.color.secondaryDark};
    }
    &:hover {
      color: ${({ theme }) => theme.color.secondaryDark};
    }
  }
`;

export const SubmitButton = styled.input`
  background-color: ${({ theme }) => theme.color.primaryDark};
  color: ${({ theme }) => theme.color.primaryLightest};
  font-size: 2rem;
  font-weight: 900;
  &:active {
    color: ${({ theme }) => theme.color.secondaryDark};
  }
`;
