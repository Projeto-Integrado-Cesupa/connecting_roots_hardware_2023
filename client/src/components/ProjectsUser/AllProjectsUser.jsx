import React from "react";
import PostProjectUser from "../PostProjectUser/PostProjectUser";

const AllProjectsUser = () => {
  return (
    <div className="">
      <div className="grid gap-4 grid-cols-2 mt-4">
        <div className=" col-span-1  rounded-xl border border-gray-300 shadow-md p-4">
          <PostProjectUser />
        </div>
        <div className=" col-span-1  rounded-xl border border-gray-300 shadow-md p-4">
          <PostProjectUser />
        </div>
        <div className=" col-span-1  rounded-xl border border-gray-300 shadow-md p-4">
          <PostProjectUser />
        </div>
        <div className=" col-span-1  rounded-xl border border-gray-300 shadow-md p-4">
          <PostProjectUser />
        </div>
        <div className=" col-span-1  rounded-xl border border-gray-300 shadow-md p-4">
          <PostProjectUser />
        </div>
        <div className=" col-span-1  rounded-xl border border-gray-300 shadow-md p-4">
          <PostProjectUser />
        </div>
      </div>
    </div>
  );
};

export default AllProjectsUser;
