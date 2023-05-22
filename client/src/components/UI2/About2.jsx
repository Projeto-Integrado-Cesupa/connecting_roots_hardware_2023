import React from 'react'

const About2 = () => {
  return (
    <div className='container'>
      <div className="flex justify-around mt-14">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-xl font-medium">Possui algum projeto voltado para o impacto social?</span>
          <div className="bg-img-plantacao bg-cover h-[240px] w-[400px]"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-xl font-medium">Conecte-se e torne viável a construção do seu projeto!</span>
          <div className="bg-img-fundos bg-cover h-[240px] w-[400px]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8">
        <span className=" text-xl font-medium">A ConnectingRoots é uma plataforma online dedicada a impulsionar projetos sustentáveis.</span>
        <span className=" text-xl font-medium">Aqui, você terá acesso a... </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path d="M12.0049 22.0029C6.48204 22.0029 2.00488 17.5258 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029ZM12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 16.4212 7.5866 20.0029 12.0049 20.0029ZM8.50488 14.0029H14.0049C14.281 14.0029 14.5049 13.7791 14.5049 13.5029C14.5049 13.2268 14.281 13.0029 14.0049 13.0029H10.0049C8.62417 13.0029 7.50488 11.8836 7.50488 10.5029C7.50488 9.12222 8.62417 8.00293 10.0049 8.00293H11.0049V6.00293H13.0049V8.00293H15.5049V10.0029H10.0049C9.72874 10.0029 9.50488 10.2268 9.50488 10.5029C9.50488 10.7791 9.72874 11.0029 10.0049 11.0029H14.0049C15.3856 11.0029 16.5049 12.1222 16.5049 13.5029C16.5049 14.8836 15.3856 16.0029 14.0049 16.0029H13.0049V18.0029H11.0049V16.0029H8.50488V14.0029Z" fill="rgba(101,166,117,1)"></path></svg>
          <span className="text-lg font-semibold">Captação de recursos</span>
          <span className="text-base font-normal">Angarie fundos para impulsionar os seus projetos junto a investidores comprometidos com iniciativas sustentáveis.</span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path d="M3 19.0002V5.70058C3 5.28007 3.26307 4.90449 3.65826 4.76079L13.3291 1.24411C13.5886 1.14974 13.8755 1.28361 13.9699 1.54313C13.9898 1.5979 14 1.65573 14 1.714V6.66682L20.3162 8.77223C20.7246 8.90834 21 9.29048 21 9.72091V19.0002H23V21.0002H1V19.0002H3ZM5 19.0002H12V3.85555L5 6.40101V19.0002ZM19 19.0002V10.4417L14 8.77501V19.0002H19Z" fill="rgba(101,166,117,1)"></path></svg>
          <span className="text-lg font-semibold">Conexões estratégicas</span>
          <span className="text-base font-normal">Conecte-se com empresas e profissionais parceiros que compartilham sua visão de sustentabilidade e impulsionam seu projeto rumo ao sucesso.</span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z" fill="rgba(101,166,117,1)"></path></svg>
          <span className="text-lg font-semibold">Visibilidade</span>
          <span className="text-base font-normal">Apresente os seus projetos, destacando o impacto positivo que terão na Região Amazônica Brasileira e obtenha a visibilidade esperada.</span>
        </div>

      </div>
    </div>
  )
}

export default About2