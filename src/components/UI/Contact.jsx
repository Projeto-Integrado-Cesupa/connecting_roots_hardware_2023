import React from "react";
import imgContact from "../../assets/images/imgcontato.png";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Contato
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <figure className="flex items-center w-full h-full">
              <img src={imgContact} alt="" />
            </figure>
          </div>

          <div className="w-[700px] mt-8 md:mt-0 md:w1/2 ml:20 sm:h-[450px] lg:flex items-center bg-primaryColor rounded-md px-4 lg:px-8 py-8 ml-10">
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="E-mail"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Digite a sua mensagem..."
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <button
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingcolor
             text-center ease-linear duration-150"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
