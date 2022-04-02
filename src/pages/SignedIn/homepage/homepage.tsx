import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircleMenu } from "../../../components/GroupAdministration";
import GroupMainCard from "../../../components/GroupAdministration/group/groupMainCard";
import { RootState } from "../../../store";
import { Group } from "../../../store/Groups";
import { getMyGroups } from "../../../store/Groups/groupsUtils";
import { PageContainer } from "./homepahe.styled";

const Homepage = () => {
  const { succes, groups } = useSelector((state: RootState) => state.Groups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyGroups());
  }, [dispatch, succes]);

  return (
    <PageContainer>
      {groups?.map((group: Group) => (
        <GroupMainCard GroupProps={group} />
      ))}
      <CircleMenu />
    </PageContainer>
  );
};

export default Homepage;
