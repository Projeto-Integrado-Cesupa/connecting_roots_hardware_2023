import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalUserProfile from "../ModalUserProfile/ModalUserProfile";

const User = () => {

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

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

      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <span className="text-sm">Seguidores</span>
          <span className="text-base ml-2  text-smallTextColor">7</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">Seguindo</span>
          <span className="text-base ml-2  text-smallTextColor">12</span>
        </div>
      </div>
      <hr className=" flex items-center m-4 bg-gray-300" />
      <div className="w-full h-full flex items-center justify-center">
        <button
          onClick={() => showModalHandler()}
          className="text-white bg-smallTextColor hover:bg-secondColor mb-4 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
        >
          Meu perfil
        </button>
      </div>
      {showModal && <ModalUserProfile setShowModal={setShowModal}/>}
    </div>
  );
};

export default User;
