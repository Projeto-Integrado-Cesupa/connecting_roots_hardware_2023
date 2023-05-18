import React from "react";
import Following from "../Following/Following";
import Members from "../Members/Members";

const ProfileRight = () => {
  return (
    <div className="col-span-1">
    <Members />
    <Following />
    </div>
  );
};

export default ProfileRight;
