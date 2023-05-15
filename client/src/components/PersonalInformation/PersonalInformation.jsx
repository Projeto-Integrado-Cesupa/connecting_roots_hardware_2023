import React from "react";

const PersonalInformation = () => {
  return (
    <div className="p-6">
      <form className="flex flex-col justify-between">
        <span className="text-xl font-[500] pb-2">Geral</span>
        <div className="flex w-full">
          <div className="flex flex-col py-2 w-[23rem]">
            <label className="text-base ">Razão social</label>
            <input
              type="text"
              class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
              placeholder="Carbon Free Ltda"
              required
            />
          </div>
          <div className="flex flex-col py-2 w-[23rem] ml-6">
            <label className="text-base">Nome fantasia</label>
            <input
              type="text"
              class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
              placeholder="Carbon Free"
              required
            />
          </div> 
        </div>
        <div className="flex w-full">
          <div className="flex flex-col py-2 w-[23rem]">
            <label className="text-base ">Cnpj</label>
            <input
              type="number"
              class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
              placeholder="123.456.789/0001-12"
              required
            />
          </div>
          <div className="flex flex-col py-2 w-[23rem] ml-6">
            <label className="text-base">Telefone</label>
            <input
              type="number"
              class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
              placeholder="(91) 99999-9999"
              required
            />
          </div>
        </div>
         <div className="flex items-center gap-4 py-8">
            <button
           
            class="flex items-center gap-2 text-white bg-smallTextColor font-[600] py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-secondColor hover:text-white  ease-in duration-300">
              <i class="ri-send-plane-line"></i>
              Salvar
            </button>

            <span className="text-2xl text-primaryColor md:hidden cursor-pointer ">
              <i class="ri-menu-line"></i>
            </span>
          </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
