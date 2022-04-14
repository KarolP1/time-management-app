import styled from "styled-components";

export const SidemenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primaryMedium};
  padding-top: 6.5rem;
  z-index: 1000;

  @media (min-width: ${({ theme }) => theme.size.lg}) {
    display: none;
  }
`;
