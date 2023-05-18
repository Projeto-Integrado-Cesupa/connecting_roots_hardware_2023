import React from "react";
import ProfileCenter from "../ProfileCenter/ProfileCenter";
import ProfileLeft from "../ProfileLeft/ProfileLeft";
import ProfileRight from "../ProfileRight/ProfileRight";

const Profile = () => {
  return (
    <>
      <div className="container grid grid-cols-4 gap-[1rem] relative h-full">
        <ProfileLeft />
        <ProfileCenter />
        <ProfileRight />
      </div>
    </>
  );
};

export default Profile;
