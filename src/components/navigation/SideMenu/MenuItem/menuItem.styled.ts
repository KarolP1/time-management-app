import styled from "styled-components";

interface MenuItemI {
  accent: boolean;
}

export const MenuItemButton = styled.button<MenuItemI>`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.color.secondaryMedium};
  border-bottom: 1px solid transparent;
  margin: 1rem 2rem;
  border: 2px solid
    ${({ accent, theme }) =>
      accent ? theme.color.secondaryMedium : "transparent"};
  padding: 1rem 2rem;
  border-radius: 0.4rem;

  &:hover {
    color: ${({ theme }) => theme.color.secondaryLight};
    border-bottom-color: red;
    border-bottom: 1px solid
      ${({ theme, accent }) => (accent ? theme.color.secondaryLight : "#fff")};
  }

  &:active {
    color: ${({ theme }) => theme.color.secondaryLight};
    transform: scale(1.05);
    border-bottom-color: ${({ theme }) => theme.color.secondaryLight};
    border-bottom: 2px solid
      ${({ theme, accent }) => (accent ? theme.color.secondaryLight : "#fff")};
  }
  a {
    color: ${({ theme, accent }) =>
      accent ? theme.color.secondaryMedium : "#fff"};
    text-decoration: none;
    text-transform: capitalize;
  }
  a:hover {
    color: ${({ theme, accent }) =>
      accent ? theme.color.secondaryLight : "#fff"};
  }

  a:active {
    color: ${({ theme, accent }) =>
      accent ? theme.color.secondaryLight : "#fff"};
  }
`;
