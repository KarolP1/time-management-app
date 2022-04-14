import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ioc } from "../../../App";
import { CircleMenu } from "../../../components/GroupAdministration";
import GroupEditGroup from "../../../components/GroupAdministration/group/GroupEditGroup";
import GroupMainCard from "../../../components/GroupAdministration/group/groupMainCard";
import GroupNewUser from "../../../components/GroupAdministration/group/GroupNewUser";
import { RootState } from "../../../store";
import { Group } from "../../../store/Groups";
import { getMyGroups } from "../../../store/Groups/groupsUtils";
import { User } from "../../../store/User/user.reducer";
import { PageContainer } from "./homepahe.styled";

export interface MenuType {
  setType: Dispatch<SetStateAction<undefined | "edit" | "add">>;
  setGroupId: Dispatch<SetStateAction<number | undefined | null>>;
}

const Homepage = () => {
  const { succes, groups } = useSelector((state: RootState) => state.Groups);

  const [type, setType] = useState<undefined | "edit" | "add">();
  const [groupId, setGroupId] = useState<number | null>();
  const [activeUsers, setActiveUsers] = useState<User[]>([]);

  let group = groups?.filter((group) => group.id === groupId)[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyGroups());
  }, [dispatch, succes]);

  ioc.on("user:active", (data) => {
    setActiveUsers(data);
  });

  return (
    <PageContainer>
      {groups?.map((group: Group) => (
        <GroupMainCard
          setGroupId={setGroupId}
          setType={setType}
          GroupProps={group}
          key={group.id}
        />
      ))}
      {JSON.stringify(activeUsers)}
      <CircleMenu />
      {type === "add" && <GroupNewUser setType={setType} groupId={groupId} />}
      {type === "edit" && (
        <GroupEditGroup setType={setType} groupId={groupId} group={group} />
      )}
      {type === undefined && <div></div>}
    </PageContainer>
  );
};

export default Homepage;
