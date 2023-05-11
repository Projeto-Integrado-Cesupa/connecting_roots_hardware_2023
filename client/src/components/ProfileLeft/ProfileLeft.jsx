import React from "react";
import Members from "../Members/Members";
import ProfileProjects from "../ProfileProjects/ProfileProjects";
import User from "../User/User";

const ProfileLeft = () => {
  return (
    <div className="col-1">
      <User />
      <ProfileProjects />
    </div>
  );
};

export default ProfileLeft;
