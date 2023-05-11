import React from "react";
import imgConexao from "../../assets/images/imgconexao.png";
import imgDivulgacao from "../../assets/images/imgdivulgacao.png";
import imgConscientizacao from "../../assets/images/imgconscientizacao.png";
import imgSustentabilidade from "../../assets/images/imgsustentabilidade.png";

const Guideline = () => {
  return (
    <section id="guideline">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Objetivos
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Acreditamos que podemos impulsionar a criação de projetos inovadores
            e com impacto positivo para a região Amazônica e suas comunidades.
            Para alcançar esse resultado, estabelecemos objetivos específicos:
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl: mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* =========== vertical line running trough the middle ====== */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/* =========== left card ====== */}
              <div className="mt-6 sm:mt-0 sm:mb-16">
                <div className="flex justify-between w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8 flex">
                    <div className=" transform -translate-x-1 -translate-y-4 sm:translate-y-0 flex items-center justify-center mt-5">
                      <figure>
                        <img src={imgConexao} alt="" />
                      </figure>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-smallTextColor cursor-pointer ease-in duration-150"
                    >
                      <h3 className="text-smallTextColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                        Conexão
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                        Conectar pessoas para desenvolver soluções inteligentes
                        e criativas para problemas reais da região.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full bg-smallTextColor border-white border-4 w-10 h-10 absolute left-1/2  transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center"></div>
                </div>
              </div>

              {/* =========== right card ====== */}

              <div className="mt-6 sm:mt-0 sm:mb-16">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8 flex">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-smallTextColor cursor-pointer ease-in duration-150"
                    >
                      <h3 className="text-smallTextColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                        Impulsionamento
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                        Impulsionar e dar visibilidade aos projetos de empresas
                        do terceiro setor, produtores, prestadores de serviços e
                        estudantes, em uma mesma plataforma.
                      </p>
                    </div>
                    <div className=" transform -translate-x-1 -translate-y-4 sm:translate-y-0 flex items-center justify-center mt-5">
                      <figure>
                        <img src={imgDivulgacao} alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="rounded-full bg-smallTextColor border-white border-4 w-10 h-10 absolute left-1/2  transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center"></div>
                </div>
              </div>

              {/* =========== left card ====== */}
              <div className="mt-6 sm:mt-0 sm:mb-16">
                <div className="flex justify-between w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8 flex">
                    <div className=" transform -translate-x-1 -translate-y-4 sm:translate-y-0 flex items-center justify-center mt-5">
                      <figure>
                        <img src={imgConscientizacao} alt="" />
                      </figure>
                    </div>
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-smallTextColor cursor-pointer ease-in duration-150"
                    >
                      <h3 className="text-smallTextColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                        Conscientização
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                        Conscientizar os usuários, em especial produtores
                        familiares, associações e cooperativas sobre as
                        oportunidades já presentes no mercado.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full bg-smallTextColor border-white border-4 w-10 h-10 absolute left-1/2  transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center"></div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-16">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8 flex">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-smallTextColor cursor-pointer ease-in duration-150"
                    >
                      <h3 className="text-smallTextColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                        Sustentabilidade
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                        Proporcionar um ambiente facilitador para a
                        criação de projetos sustentáveis voltados diretamente
                        para a região Amazônica.
                      </p>
                    </div>
                    <div className=" transform -translate-x-1 -translate-y-4 sm:translate-y-0 flex items-center justify-center mt-5">
                      <figure>
                        <img src={imgSustentabilidade} alt="" />
                      </figure>
                    </div>
                  </div>

                  <div className="rounded-full bg-smallTextColor border-white border-4 w-10 h-10 absolute left-1/2  transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  flex items-center justify-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guideline;
