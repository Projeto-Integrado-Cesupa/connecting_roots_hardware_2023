import React from "react";
import { Link } from "react-router-dom"

const ProfileProjects = () => {
  return (
    <Link 
    to="ProjectsUser"
    className="flex flex-col mt-4 rounded-xl border border-gray-300 shadow-md">
      <span className="flex justify-center text-xl my-4  text-smallTextColor ">
        Projetos
      </span>
      <div className="flex items-center ml-[3rem] gap-2 mb-2">
        <div className="bg-analysis h-[48px] w-[48px] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z"
              fill="rgba(255,255,255,1)"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col ml-2">
          <span className="text-lg font-bold leading-none ">0</span>
          <span className="text-base leading-none">Em análise</span>
        </div>
      </div>
      <hr className=" flex items-center mx-10 my-4 bg-gray-300" />
      <div className="flex items-center ml-[3rem] gap-2 mb-2">
        <div className="bg-smallTextColor h-[48px] w-[48px] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M6 4H4V2H20V4H18V6C18 7.61543 17.1838 8.91468 16.1561 9.97667C15.4532 10.703 14.598 11.372 13.7309 12C14.598 12.628 15.4532 13.297 16.1561 14.0233C17.1838 15.0853 18 16.3846 18 18V20H20V22H4V20H6V18C6 16.3846 6.81616 15.0853 7.8439 14.0233C8.54682 13.297 9.40202 12.628 10.2691 12C9.40202 11.372 8.54682 10.703 7.8439 9.97667C6.81616 8.91468 6 7.61543 6 6V4ZM8 4V6C8 6.68514 8.26026 7.33499 8.77131 8H15.2287C15.7397 7.33499 16 6.68514 16 6V4H8ZM12 13.2219C10.9548 13.9602 10.008 14.663 9.2811 15.4142C9.09008 15.6116 8.92007 15.8064 8.77131 16H15.2287C15.0799 15.8064 14.9099 15.6116 14.7189 15.4142C13.992 14.663 13.0452 13.9602 12 13.2219Z"
              fill="rgba(255,255,255,1)"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col ml-2">
          <span className="text-lg font-bold leading-none ">1</span>
          <span className="text-base leading-none">Em execução</span>
        </div>
      </div>
      <hr className=" flex items-center mx-10 my-4 bg-gray-300" />
      <div className="flex items-center ml-[3rem] gap-2 mb-8">
        <div className="bg-primaryColor h-[48px] w-[48px] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
              fill="rgba(255,255,255,1)"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col ml-2">
          <span className="text-lg font-bold leading-none ">3</span>
          <span className="text-base leading-none">Concluídos</span>
        </div>
      </div>
    </Link>
  );
};

export default ProfileProjects;
