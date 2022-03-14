import styled from "styled-components";

interface BurgerProps {
  readonly open: boolean;
  size: number;
}

export const StyledBurger = styled.button<BurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: max-content;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 105;
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  transform: scale(${(props) => props.size});
  flex: 1;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(${(props) => props.size + 0.03});
  }
  div {
    height: 0.5rem;
    background-color: ${(props) => props.theme.color.secondaryMedium};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    transform: scale(${(props) => props.size});

    :first-child {
      width: 90%;
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      width: 100%;

      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      width: 90%;
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
