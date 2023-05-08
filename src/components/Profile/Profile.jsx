import React from "react";
import ProfileLeft from "../ProfileLeft/ProfileLeft";
import ProfileRight from "../ProfileRight/ProfileRight";

const Profile = () => {
  return (
    <>
      <div className="container grid grid-cols-3 gap-[1rem] ">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </>
  );
};

export default Profile;
