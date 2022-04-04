import React, { useRef, useState } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { Group } from "../../../store/Groups";
import {
  CardContainer,
  CardDescription,
  CardOwner,
  CardTitle,
  UserCircle,
  UserInfoContainer,
} from "./group.styled";
import GroupOption from "./groupOptions";

const GroupMainCard = ({ GroupProps }: { GroupProps: Group }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const ref = useRef();

  const { ownerInfo, GroupName, GroupDescription, AllUsersInfo, id } =
    GroupProps;

  useOutsideClick(ref, () => setIsMenuOpen(false));

  return (
    <CardContainer ref={ref}>
      <GroupOption
        groupId={id}
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
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
              key={userInfo.id}
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
