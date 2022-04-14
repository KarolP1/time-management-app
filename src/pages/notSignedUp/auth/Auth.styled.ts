import styled from "styled-components";

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primaryLightest};
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryLight};
  box-shadow: ${({ theme }) => theme.shadow.boxMedium};
  align-items: center;
  justify-content: center;

  margin: 0;

  @media (min-width: ${({ theme }) => theme.size.md}) {
    margin: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.size.lg}) {
    flex-direction: row;
    margin: 5rem auto;
  }

  @media (min-width: ${({ theme }) => theme.size.lg}) {
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: fill-available;
  align-items: end;
  justify-content: center;
  flex: 1;
  height: 100%;
  max-width: 50vw;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const LForm = styled.form`
  display: flex;
  flex: 2;
  width: fill-available;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: start;
  margin: 2rem;

  @media (min-width: ${({ theme }) => theme.size.lg}) {
    flex: 1;
  }
  @media (min-width: ${({ theme }) => theme.size.md}) {
    padding: 0 7rem;
  }
  input {
    margin: 0.5rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.color.primaryDark};
    width: fill-available;
    font-size: 1.5rem;

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
    padding: 2rem;
    &:active {
      color: ${({ theme }) => theme.color.secondaryMedium};
    }
    &:hover {
      color: ${({ theme }) => theme.color.secondaryMedium};
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.color.primaryDark};
  color: ${({ theme }) => theme.color.primaryLightest};
  width: fill-available;
  border: none;
  box-shadow: ${({ theme }) => theme.shadow.boxMedium};
  font-size: 2rem;
  font-weight: 900;
  margin: 0.5rem;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;

  &:active {
    color: ${({ theme }) => theme.color.secondaryDark};
    box-shadow: ${({ theme }) => theme.shadow.boxDark};
  }
`;
