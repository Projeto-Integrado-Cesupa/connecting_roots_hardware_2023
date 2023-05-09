import React from "react";
import { Link } from "react-router-dom";

const ProfileCenter = () => {
  return (
    <div className="col-span-2 overflow-auto h-screen scrollbar">
      <div className="flex flex-col mt-4 rounded-xl border border-gray-300 shadow-md p-4 ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="bg-img-carbonfree bg-cover h-[56px] w-[56px] rounded-full"></div>
            <div className="flex flex-col ml-2 ">
              <span className="text-lg leading-none">Carbon Free</span>
              <span className="text-sm">2.293 seguidores</span>
            </div>
          </div>
          <div className="flex items-center">
            <button class="flex items-center gap-2 text-white bg-smallTextColor text-sm py-2 px-4 rounded-[8px] max-h-[40px] hover:text-white  ease-in duration-300">
              Seguir
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="rgba(101,166,117,1)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Link className="text-xl my-4 hover:underline">
          Projeto Carbon Free
        </Link>
        <span className="text-base text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          incidunt sequi ex ipsa vero accusantium quae excepturi reiciendis. Aut
          accusamus aliquid nihil non similique, aperiam eaque porro deleniti
          ullam tempora? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Omnis, tenetur? Error, quod eligendi aperiam molestiae dicta non
          delectus eveniet voluptatem culpa voluptates modi praesentium fugiat
          repudiandae! Sit perspiciatis architecto at!
        </span>
        <div className="bg-img-carbonwallpaper bg-cover w-full h-[250px] rounded-md mt-4"></div>
        <div className="flex items-center mt-4">
          <div className="flex">
            <span className="text-lg">Categorias:</span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Conservação ambiental
            </span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Empreendedorismo social
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 rounded-xl border border-gray-300 shadow-md p-4 mb-4">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="bg-img-carbonfree bg-cover h-[56px] w-[56px] rounded-full"></div>
            <div className="flex flex-col ml-2 ">
              <span className="text-lg leading-none">Carbon Free</span>
              <span className="text-sm">2.293 seguidores</span>
            </div>
          </div>
          <div className="flex items-center">
            <button class="flex items-center gap-2 text-white bg-smallTextColor text-sm py-2 px-4 rounded-[8px] max-h-[40px] hover:text-white  ease-in duration-300">
              Seguir
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="rgba(101,166,117,1)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Link className="text-xl my-4 hover:underline">
          Projeto Carbon Free
        </Link>
        <span className="text-base text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          incidunt sequi ex ipsa vero accusantium quae excepturi reiciendis. Aut
          accusamus aliquid nihil non similique, aperiam eaque porro deleniti
          ullam tempora? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Omnis, tenetur? Error, quod eligendi aperiam molestiae dicta non
          delectus eveniet voluptatem culpa voluptates modi praesentium fugiat
          repudiandae! Sit perspiciatis architecto at!
        </span>
        <div className="bg-img-carbonwallpaper bg-cover w-full h-[250px] rounded-md mt-4"></div>
        <div className="flex items-center mt-4">
          <div className="flex">
            <span className="text-lg">Categorias:</span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Conservação ambiental
            </span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Empreendedorismo social
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCenter;
