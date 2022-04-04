import styled from "styled-components";

export const CardContainer = styled.div<{ ref: any }>`
  display: flex;
  flex-direction: column;
  width: fill-available;
  height: min-content;
  margin: 2rem 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.primaryLighter};
  border-radius: 1rem;
  position: relative;
`;

export const CardTitle = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.secondaryMedium};
  margin: 0;
  font-weight: bold;
  text-align: center;
  padding: 0;
  margin-bottom: 0.3rem;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-weight: 600;
  padding: 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primaryLightest};
`;
export const CardOwner = styled.p`
  margin: 0;
  font-weight: 600;
  padding: 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primaryLightest};
  text-transform: capitalize;
  margin-top: 1rem;
  text-align: right;
`;

export const UserInfoContainer = styled.div`
  display: flex;
`;

export const UserCircle = styled.div<{
  fullName: string;
  shortName: string;
}>`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.color.secondaryMedium};
  background-color: ${({ theme }) => theme.color.primaryDark};
  padding: 1rem;
  border-radius: 3rem;
  font-weight: bold;
  text-transform: capitalize;
  transition: width 100ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem 0.5rem;
  flex-direction: column;
  position: relative;

  &:before {
    content: "${(props) => props.shortName}";
    margin: 0;
    padding: 0;
    position: absolute;
    top: 35%;
    left: 35%
    opacity: 1;
    transition:opacity 100ms linear;
  }

  &:after {
    content: "${(props) => props.fullName}";
    margin: 0;
    padding: 0;
    position: absolute;
    opacity: 0;
    transition:opacity 100ms linear;
  }

  &:hover {
    width: 50%;

    &:before {
      content: "${(props) => props.shortName}";
      margin: 0;
      padding: 0;
      position: absolute;
      opacity: 0;
    }

    &:after {
      content: "${(props) => props.fullName}";
      margin: 0;
      padding: 0;
      position: absolute;
      top: 35%;
      left: 35%;
      opacity: 1;
      text-align: center;
    }
  }
`;

export const GroupOptionContainer = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  border: none;
  background-color: ${({ theme }) => theme.color.primaryMedium};
  border-radius: 3rem;
  box-shadow: ${({ theme }) => theme.shadow.boxLight};
  cursor: pointer;
  transition: all 50ms linear;
  z-index: 10;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.boxMedium};
  }
  &:active {
    transform: rotate(1000deg);
  }

  div {
    border-radius: 3rem;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.color.secondaryDark};
  }
`;

export const MenuButton = styled(GroupOptionContainer)<{
  open: boolean;
  numberInRow: number;
}>`
  z-index: 1;
  color: ${({ theme }) => theme.color.secondaryDark};
  transform: translateX(
    ${({ open, numberInRow }) => (open ? -numberInRow * 5 + "rem" : "0")}
  );
`;
