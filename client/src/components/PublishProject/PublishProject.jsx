import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const PublishProject = () => {
  const [isStepTwo, setIsStepTwo] = useState(true);

  return (
    <div className="container">
      <div className="grid grid-cols-3 mt-4 rounded-xl border border-gray-300 shadow-md h-[526px] ">
        <div className="col-span-2 p-4 ">
          <Outlet />
          <div className="flex items-center justify-between p-2 bg-smallTextColor rounded-b-md">
            {isStepTwo ? (
              <div class="w-[45px] bg-smallTextColor rounded-full"></div>
            ) : (
              <Link
              onClick={() => {
                setIsStepTwo((prev) => !prev);
              }} 
              class="flex items-center gap-2 text-white bg-smallTextColor text-sm py-2 px-4 rounded-[8px] max-h-[40px] hover:text-white  ease-in duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </Link>
            )}
            <Link
              to={isStepTwo ? "StepTwo" : "/Dashboard"}
              onClick={() => {
                setIsStepTwo((prev) => !prev);
              }}
              class="flex items-center gap-2 text-white bg-smallTextColor text-sm py-2 px-4 rounded-[8px] max-h-[40px] hover:text-white  ease-in duration-300"
            >
              {isStepTwo ? "Próxima" : "Publicar"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="col-span-1 bg-img-publish rounded-e-md bg-cover"></div>
      </div>
    </div>
  );
};

export default PublishProject;
