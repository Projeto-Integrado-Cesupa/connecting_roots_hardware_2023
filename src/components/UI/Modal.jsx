import React from "react";
import projects from "../../assets/data/projectsData";

const Modal = ({ activeID, setShowModal }) => {
  const project = projects.find((project) => project.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div className="">
          <figure className="">
            <img src={project.imgUrl} alt="" className="rounded-[8px]" />
          </figure>
        </div>
        <div className="">
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {project.title}
          </h2>

          <p className="text-[15px] leading-7 text-primaryColor text-justify">
            {project.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">
              Tecnologias utilizadas:
            </h4>

            {project.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          <a href={project.siteUrl}>
            <button className="bg-smallTextColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-primaryColor ease-in duration-300">
              Ir para o site
            </button>
          </a>
        </div>

            <button onClick={() => setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer">&times;</button>

      </div>
    </div>
  );
};

export default Modal;
