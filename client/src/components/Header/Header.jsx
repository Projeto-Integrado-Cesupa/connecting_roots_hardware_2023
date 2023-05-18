import React from "react";

export default function Header() {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*======== LOGO ======== */}
          <div className="flex items-center gap-[10px]">
            <div className="leading-[20px]">
              <h2 className="text-2xl text-primaryColor font-[700]">
                ConnectingRoots
              </h2>
            </div>
          </div>
          {/*======== LOGO end ======== */}
          {/*======== MENU start ======== */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-primaryColor fontt[600]" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-primaryColor fontt[600]" href="#guideline">
                  Objetivos
                </a>
              </li>
              <li>
                <a className="text-primaryColor fontt[600]" href="#projects">
                  Projetos
                </a>
              </li>
              <li>
                <a className="text-primaryColor fontt[600]" href="#contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          {/*======== MENU end ======== */}

          {/*======== MENU right ======== */}
          <div className="flex items-center gap-4">
            <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href='/Auth';
              }}
            class="flex items-center gap-2 text-white bg-smallTextColor font-[600] py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-primaryColor hover:text-white  ease-in duration-300">
              <i class="ri-send-plane-line"></i>
              Login
            </button>

            <span className="text-2xl text-primaryColor md:hidden cursor-pointer ">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/*======== MENU end ======== */}
        </div>
      </div>
    </header>
  );
}
