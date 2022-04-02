import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fill-available;
  height: min-content;
  margin: 2rem 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.primaryLighter};
  border-radius: 1rem;
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
