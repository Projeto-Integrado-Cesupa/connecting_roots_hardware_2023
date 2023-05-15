import React, { Fragment, useState } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="h-[70px] leading-[70px]  items-center shadow">
      <div className="container ">
        <div className="grid grid-cols-4 items-center">
          <div className="flex items-center gap-[30px] col-span-1">
            {/*======== LOGO ======== */}
            <div className="flex items-center gap-[10px]">
              <div className="leading-[20px]">
                <Link to="" className="text-xl text-headingColor font-[700]">
                  ConnectingRoots
                </Link>
              </div>
            </div>
            {/*======== LOGO end ======== */}
            {/*======== MENU start ======== */}
            <div className="">
              <Link
                to="PublishProject"
                className="inline-flex text-sm leading-none sm:text-base bg-white  text-gray-600 hover:text-smallTextColor ring-gray-300"
              >
                Publicar
              </Link>
            </div>
            {/*======== MENU end ======== */}
          </div>

          {/*======== MENU center start ======== */}

          <div class="flex col-span-2">
            <input
              type="search"
              class="relative w-full m-0 -mr-0.5 block  min-w-0 flex-auto border rounded-l-md border-solid border-smallTextColor bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-headingColor outline-none transition duration-200 ease-in-out focus:z-[3] focus:outline-none "
              placeholder="Pesquisar"
            />
            <button
              class="relative z-[2] flex items-center dark rounded-r bg-smallTextColor px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white  transition duration-150 ease-in-out "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/*======== MENU center end ======== */}
          {/*======== MENU right ======== */}
          <div className="flex gap-2 col-span-1 justify-end">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  class="relative z-[2] flex items-center rounded-full bg-smallTextColor px-2.5 py-2.5 text-xs font-medium uppercase leading-tight text-white  transition duration-150 ease-in-out "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"
                      fill="rgba(255,255,255,1)"
                    ></path>
                  </svg>
                </Menu.Button>
              </div>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  class="relative z-[2] flex items-center rounded-full bg-smallTextColor px-2.5 py-2.5 text-xs font-medium uppercase leading-tight text-white  transition duration-150 ease-in-out "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
                      fill="rgba(255,255,255,1)"
                    ></path>
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Popover className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="flex flex-col p-4">
                          <div className="flex justify-between pb-4">
                            <span className=" text-headingColor font-bold  leading-none">
                              Notificações
                            </span>

                            <a href="#" className=" underline leading-none">
                              Ver todas
                            </a>
                          </div>
                          <hr className="bg-gray-900 h-px w-full " />
                          <div className="text-[14px] flex justify-center items-center leading-none pt-4">
                            Sem notificações
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Popover>
              </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  class="relative z-[2] flex items-center rounded-full bg-smallTextColor px-2.5 py-2.5 text-xs font-medium uppercase leading-tight text-white  transition duration-150 ease-in-out "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"
                      fill="rgba(248,246,246,1)"
                    ></path>
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Popover className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <div className="flex flex-col p-4">
                          <div className="flex justify-between pb-4">
                            <span className=" text-headingColor font-bold  leading-none">
                              Mensagens
                            </span>

                            <Link to="Chat" className=" underline leading-none">
                              Ver todas
                            </Link>
                          </div>
                          <hr className="bg-gray-900 h-px w-full " />
                          <div className="text-[14px] flex justify-center items-center leading-none pt-4">
                            Sem notificações
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Popover>
              </Transition>
            </Menu>
            <Popover as="div" className="relative inline-block text-left">
              <div>
                <Popover.Button
                  onClick={handleMenuClick}
                  class="relative z-[2] flex items-center rounded-full bg-smallTextColor p-px p-py text-xs font-medium uppercase leading-tight text-white  transition duration-150 ease-in-out "
                  type="button"
                >
                  <div className="bg-cover bg-img-carbonfree px-2.5 py-2.5 rounded-full w-[2.35rem] h-[2.35rem]"></div>
                </Popover.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 w-[14rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {({ close }) => (
                    <div className="py-1">
                      <Popover.Panel>
                        {({ active }) => (
                          <div className="flex flex-col p-4 ">
                            <span className=" text-headingColor font-bold leading-none pb-4">
                              Carbon Free
                            </span>
                            <hr className="bg-gray-900 h-px w-full " />
                            <div className="flex flex-col gap-4 py-4">
                              <Link
                                onClick={() => close()}
                                to="MyAccount"
                                className="leading-none"
                              >
                                Minha conta
                              </Link>
                              <Link
                                onClick={() => close()}
                                to="#"
                                className="leading-none"
                              >
                                Plano de assinatura
                              </Link>
                              <Link
                                onClick={() => close()}
                                to="#"
                                className="leading-none"
                              >
                                Financeiro
                              </Link>
                            </div>
                            <hr className="bg-gray-900 h-px w-full " />
                            <Link
                              onClick={() => {
                                window.localStorage.setItem("token", null);
                                close();
                              }}
                              to="/"
                              className="leading-none pt-4 flex justify-center"
                            >
                              Sair
                            </Link>
                          </div>
                        )}
                      </Popover.Panel>
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
          {/*======== MENU end ======== */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
