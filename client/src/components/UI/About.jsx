import React from "react";
import homeImg from "../../assets/images/imgabout.png";
import CountUp from "react-countup";

const About = () => {
  return (
    <section className="pt-0" id="home">
      <div className="container pt-14">
        <div className="md:flex items-center justify-around sm:flex-col md:flex-row">
          {/* ==== left content ==== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Olá, seja bem-vindo(a)!
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              Conectamos pessoas, projetos e empresas para um futuro sustentável
              na Amazônia
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 text-justify"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Junte-se a nós na construção de um futuro conectado à riqueza da
              Amazônia. Através da nossa plataforma, você terá a oportunidade de
              se conectar com projetos inovadores, pessoas engajadas e empresas
              responsáveis. Venha fazer parte dessa rede de conexões e
              transformação!
            </p>
            <div className="flex items-center gap-3 mt-14">
              <span className="text-primaryColor text-[15px] font-[600]">
                Siga-nos:
              </span>
              <span>
                <a className="text-primaryColor text-[18px] font-[600]" href="#">
                  <i class="ri-facebook-line" />
                </a>
              </span>
              <span>
                <a className="text-primaryColor text-[18px] font-[600]" href="#">
                  <i class="ri-instagram-line" />
                </a>
              </span>
            </div>
          </div>
          {/* ==== left content end ==== */}
          {/* ==== img ==== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img
              data-aos="zoom-in"
              data-aos-duration="2000"  
              src={homeImg} alt="" />
            </figure>
          </div>
          {/* ==== img end ==== */}
          {/* ==== content right end ==== */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
            <h1 className="text-headingColor font-[600] text-[32px] mb-5">
                Projetos
              </h1>
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={149} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Em análise
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={238} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Em execução
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={417} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Concluídos
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={96} duration={2} suffix='%' />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Taxa de conclusão
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
