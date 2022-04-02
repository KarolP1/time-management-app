import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircleMenu } from "../../components/GroupAdministration";
import { RootState } from "../../store";
import { getMyGroups } from "../../store/Groups/groupsUtils";

const Homepage = () => {
  const { succes, groups } = useSelector((state: RootState) => state.Groups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyGroups());
  }, [dispatch, succes]);

  console.log(groups);
  return (
    <div style={{ flex: 1, display: "flex" }}>
      <div>
        {groups?.map((group) => (
          <div key={group.id}>
            <h1>groupTitle</h1>
            <p>{group.GroupName}</p>
            <p>{group.ownerInfo.first_name}</p>
            <p>{group.ownerInfo.last_name}</p>
            <p>{group.ownerInfo.email}</p>
            <div>
              <h2>AllUsersInfo</h2>
              {group.AllUsersInfo.map((user) => (
                <div key={user.id}>
                  <p>{user.first_name}</p>
                  <p>{user.last_name}</p>
                  <p>{user.email}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <CircleMenu />
    </div>
  );
};

export default Homepage;
