import React from "react";

const ProfileLeft = () => {
  return (
    <div className="flex flex-col mt-4 rounded-xl border border-primaryColor shadow-md col-1">
      <div className="relative flex flex-col  items-center justify-center rounded-t-px">
        <img className="bg-img-personBg w-full rounded-t-xl h-40" />
        <img className="bg-img-person w-[8rem] rounded-full mt-40 h-[8rem] border-2 border-smallTextColor absolute shadow-xl bg-cover" />
      </div>
      <div className="flex flex-col items-center mt-[5rem] gap-2">
        <span className="text-xl  text-primaryColor">Luís Augusto</span>
        <span className="text-sm text-smallTextColor">Desenvolvedor Front-End</span>
      </div>
      <div className="flex flex-col">
      </div>
    </div>
  );
};

export default ProfileLeft;
