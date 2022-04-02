import styled from "styled-components";

export const SidemenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;
