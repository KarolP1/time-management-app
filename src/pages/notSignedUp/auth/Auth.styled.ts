import styled from "styled-components";

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primaryLightest};
  margin: 1rem 2rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryLight};
  box-shadow: ${({ theme }) => theme.shadow.boxMedium};

  @media (min-width: ${({ theme }) => theme.size.md}) {
    flex-direction: row;
    margin: 10rem auto;
    border: 1px solid black;
  }
  h1 {
    margin: 0 2rem;
    color: ${({ theme }) => theme.color.primaryLightest};
    text-align: start;
    text-transform: capitalize;
    font-size: 3rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  img {
    flex: 1;
    padding: 5rem;
    padding-bottom: 2rem;
    width: inherit;
    object-fit: contain;
  }
  @media (min-width: ${({ theme }) => theme.size.md}) {
    flex-direction: row;
    flex: 1;
  }
`;

export const LForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  margin: auto;

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
    color: ${({ theme }) => theme.color.primaryLightest};
    text-align: center;
    font-size: 1.5rem;
    text-decoration: none;
    display: block;
    &:active {
      color: ${({ theme }) => theme.color.secondaryMedium};
    }
    &:hover {
      color: ${({ theme }) => theme.color.secondaryMedium};
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
