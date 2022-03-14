import styled from "styled-components";

export const ABContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.primaryDark};
  box-shadow: ${({ theme }) => theme.shadow.boxDark};
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ABTitle = styled.h1`
  color: ${({ theme }) => theme.color.secondaryMedium};
  margin-left: 3rem;
`;

export const ABMenuContainer = styled.div`
  display: flex;
  color: white;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    display: none;
  }
`;

export const ABHamburgerMenuContainer = styled.div`
  display: flex;
  color: white;
  position: relative;
  width: 4rem;
  height: 4rem;
  bacground-color: red;
  margin-right: 2rem;

  @media (min-width: ${({ theme }) => theme.size.md}) {
    display: none;
  }
`;
