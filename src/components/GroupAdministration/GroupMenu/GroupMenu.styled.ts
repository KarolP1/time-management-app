import styled from "styled-components";

export const MenuContainer = styled.button<{ open: boolean }>`
  width: 5rem;
  height: 5rem;
  border-radius: 4rem;
  background-color: ${({ theme }) => theme.color.primaryDark};
  box-shadow: ${({ theme }) => theme.shadow.boxDark};
  border: none;
  position: fixed;
  top: 10rem;
  right: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 500ms ease-in-out;

  &:after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.color.secondaryMedium};
    width: 60%;
    height: 0.3rem;
    transition: transform 200ms ease-in-out;
    transform: ${({ open }) => (!open ? "rotate(0deg)" : "rotate(1035deg)")};
  }
  &:before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.color.secondaryMedium};
    width: 60%;
    height: 0.3rem;
    transition: transform 100ms ease-in-out;

    transform: ${({ open }) => (!open ? "rotate(90deg)" : "rotate(1125deg)")};
  }
`;

export const GroupContainerMenu = styled.div<{ open: boolean }>`
  background-color: ${({ theme }) => theme.color.primaryLight};
  border: 1px solid ${({ theme }) => theme.color.primaryMedium};
  border-radius: 1rem;
  transition: display 5000ms ease-in-out;
  display: ${({ open }) => (open ? "flex" : "none")};
  margin: 10rem 10rem;
  box-shadow: ${({ theme }) => theme.shadow.boxMedium};
  padding: 2rem 5rem;
  position: absolute;
  width: fill-available;
  height: 50%;
`;
