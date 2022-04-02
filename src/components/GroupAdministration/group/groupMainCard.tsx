import React from "react";
import { Group } from "../../../store/Groups";
import {
  CardContainer,
  CardDescription,
  CardOwner,
  CardTitle,
  UserCircle,
  UserInfoContainer,
} from "./group.styled";

const GroupMainCard = ({ GroupProps }: { GroupProps: Group }) => {
  const { ownerInfo, GroupName, GroupDescription, AllUsersInfo } = GroupProps;

  return (
    <CardContainer>
      <CardTitle>{GroupName}</CardTitle>
      <CardDescription>{GroupDescription}</CardDescription>
      <CardOwner>
        Owner: {ownerInfo.first_name} {ownerInfo.last_name}
      </CardOwner>
      <UserInfoContainer>
        {AllUsersInfo.map((userInfo) => {
          const letterFirstName = userInfo.first_name[0];
          const letterLastName = userInfo.last_name[0];
          return (
            <UserCircle
              fullName={`${userInfo.first_name} ${userInfo.last_name}`}
              shortName={`${letterFirstName} ${letterLastName}`}
            >
              <p></p>
            </UserCircle>
          );
        })}
      </UserInfoContainer>
    </CardContainer>
  );
};

export default GroupMainCard;
