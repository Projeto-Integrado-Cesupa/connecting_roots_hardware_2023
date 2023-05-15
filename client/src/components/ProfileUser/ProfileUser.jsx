import React from "react";

const ProfileUser = ({}) => {
  return (
    <form className="p-6  ">
      <div className="flex flex-col gap-2">
        <label className="text-xl font-[500] ">Descrição da empresa</label>
        <textarea
          type="text"
          rows={3}
          class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
        />
      </div>
    </form>
  );
};

export default ProfileUser;
