import styled from "styled-components";

interface ABContainerProps {
  IsScrolledTop: boolean;
}

export const ABContainer = styled.div<ABContainerProps>`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.primaryDark};
  box-shadow: ${({ theme }) => theme.shadow.boxDark};
  position: fixed;
  top: 0;
  left: 0;
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
  z-index: 3;
  @media (min-width: ${({ theme }) => theme.size.md}) {
    display: none;
  }
`;

interface SidemenuProps {
  open: boolean;
}

export const SideMenuContainer = styled.div<SidemenuProps>`
  position: fixed;
  top: 0;
  transition: left 250ms ease;
  left: ${({ open }) => (!open ? "100%" : 0)};
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.primaryLight};
`;
