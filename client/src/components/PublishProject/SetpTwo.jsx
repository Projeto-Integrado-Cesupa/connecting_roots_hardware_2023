import React from "react";

const SetpTwo = () => {
  return (
    <div className=" scrollbar overflow-auto h-[440px]">
      <form className="flex flex-col gap-2">
        <span className="text-xl font-[500]">
          Detalhes do projeto
        </span>
        <label className="text-base ">Título do projeto</label>
        <input
          type="text"
          class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
        />
        <label className="text-base ">Descrição do projeto</label>
        <textarea
          type="text"
          rows={3}
          class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
        />

        <div class="">
          <label
            for="formFileLg"
            class="mb-2 inline-block"
          >
            Anexar imagem
          </label>
          <input
            class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-md border border-solid border-smallTextColor bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            id="formFileLg"
            type="file"
          />
        </div>
      </form>
    </div>
  );
};

export default SetpTwo;
