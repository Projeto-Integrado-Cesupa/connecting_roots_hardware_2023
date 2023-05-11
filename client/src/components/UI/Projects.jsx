import React, { useState, useEffect } from "react";
import data from "../../assets/data/projectsData";
import Modal from "./Modal";

const Projects = () => {
  const [nextItems, setNextItems] = useState(6);
  const [projects, setProjects] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setProjects(data);
    }

    if (selectTab === "analysis") {
      const filteredData = data.filter((item) => item.category === "analysis");
      setProjects(filteredData);
    }

    if (selectTab === "execution") {
      const filteredData = data.filter((item) => item.category === "execution");
      setProjects(filteredData);
    }

    if (selectTab === "completed") {
      const filteredData = data.filter((item) => item.category === "completed");
      setProjects(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="projects">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              Projetos
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-primaryColor border border-solid border-primaryColor py-2 px-4 rounded-[8px] "
            >
              Todos
            </button>
            <button
              onClick={() => setSelectTab("analysis")}
              className="text-primaryColor border border-solid border-primaryColor py-2 px-4 rounded-[8px] "
            >
              Em análise
            </button>
            <button
              onClick={() => setSelectTab("execution")}
              className="text-primaryColor border border-solid border-primaryColor py-2 px-4 rounded-[8px] "
            >
              Em execução
            </button>
            <button
              onClick={() => setSelectTab("completed")}
              className="text-primaryColor border border-solid border-primaryColor py-2 px-4 rounded-[8px] "
            >
              Concluídos
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {projects.slice(0, nextItems)?.map((projects, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={projects.imgUrl} alt="" />
              </figure>

              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(projects.id)}
                    className="text-white bg-smallTextColor hover:bg-primaryColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < projects.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-smallTextColor hover:bg-primaryColor hover:text-white py-2 px-4  rounded-[8px] font-[500] ease-in duration-200"
            >
              Carregar mais
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Projects;
