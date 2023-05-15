import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProjectsUser = () => {
  return (
    <div className="container">
      <div className="grid mt-4 rounded-xl border border-gray-300 shadow-md scrollbar overflow-auto p-6 h-[80vh]">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-[1.5rem] font-[500]">Projetos</h3>
          </div>
          <div className="flex gap-3">
            <Link
            to=""
              className="text-primaryColor border border-solid border-primaryColor py-2 px-4 rounded-[8px] "
            >
              Todos
            </Link>
            <Link
              to="AnalysisProjectsUser"
              className="text-primaryColor border border-solid border-primaryColor py-2 px-4 rounded-[8px] "
            >
              Em análise
            </Link>
            <Link
              to="ExecutionProjectsUser"
              className="text-primaryColor border border-solid border-primaryColor py-2 px-4 rounded-[8px] "
            >
              Em execução
            </Link>
            <Link
              to="CompletedProjectsUser"
              className="text-primaryColor border border-solid border-primaryColor py-2 px-4 rounded-[8px] "
            >
              Concluídos
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectsUser;
