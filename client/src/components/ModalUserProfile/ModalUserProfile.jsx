import React from "react";

const ModalUserProfile = ({ setShowModal }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div className="flex flex-col p-6">
          <span className="text-xl font-[500] flex justify-center">
            Informações da empresa
          </span>
        </div>
        <div className="flex w-full mb-4">
          <div className="flex flex-col py-2 w-[23rem]">
            <label className="text-base mb-2">Nome Fantasia</label>
            <input
              type="text"
              class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
              placeholder="Carbon Free"
            />
          </div>
          <div className="flex flex-col py-2 w-[23rem] ml-6">
            <label className="text-base mb-2">Categoria</label>
            <input
              type="text"
              class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
              placeholder="Startup"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base ">Descrição da empresa</label>
          <textarea
            type="text"
            rows={3}
            class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
          />
        </div>
        <div class="flex flex-col mt-4">
          <label for="formFileLg" class="mb-2 inline-block">
            Mudar imagem de fundo
          </label>
          <input
            class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-md border border-solid border-smallTextColor bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            id="formFileLg"
            type="file"
          />
        </div>
        <div class="flex flex-col mt-4">
          <label for="formFileLg" class="mb-2 inline-block">
            Mudar imagem de perfil
          </label>
          <input
            class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-md border border-solid border-smallTextColor bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            id="formFileLg"
            type="file"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center mt-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/Dashboard";
            }}
            className="text-white bg-smallTextColor hover:bg-secondColor  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
          >
            Salvar
          </button>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalUserProfile;
