import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="flex flex-col mt-4 rounded-xl border border-gray-300 shadow-md">
      <div className="relative flex flex-col  items-center justify-center rounded-t-px">
        <div className="bg-img-carbonwallpaper w-full rounded-t-xl h-40 bg-cover"></div>
        <div className="bg-img-carbonfree w-[8rem] rounded-full mt-40 h-[8rem] border-2 border-smallTextColor absolute shadow-xl bg-cover"></div>
      </div>
      <div className="flex flex-col items-center mt-[5rem] gap-1">
        <span className="text-xl  text-primaryColor">Carbon Free</span>
        <span className="text-sm text-smallTextColor">Startup</span>
      </div>
      <hr className=" flex items-center m-4 bg-gray-300" />

      <div className="flex justify-around mb-4">
        <div className="flex flex-col items-center">
          <span className="text-sm">Seguidores</span>
          <span className="text-base ml-2  text-smallTextColor">7</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">Seguindo</span>
          <span className="text-base ml-2  text-smallTextColor">12</span>
        </div>
      </div>
    </div>
  );
};

export default User;
