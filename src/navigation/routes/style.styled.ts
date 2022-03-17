import styled from "styled-components";
export const Container = styled.div`
  padding-top: 6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primaryLightest};
`;
