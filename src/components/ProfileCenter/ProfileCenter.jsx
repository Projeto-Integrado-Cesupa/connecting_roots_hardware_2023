import { Transition, Popover } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const ProfileCenter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="col-span-2 overflow-auto h-screen scrollbar">
      <div className="flex flex-col mt-4 rounded-xl border border-gray-300 shadow-md p-4 ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="bg-img-carbonfree bg-cover h-[56px] w-[56px] rounded-full"></div>
            <Link className="flex flex-col ml-2">
              <span className="text-lg leading-none">Carbon Free</span>
              <span className="text-sm">2.293 seguidores</span>
            </Link>
          </div>
          <div className="flex items-center">
            <button class="flex items-center gap-2 text-white bg-smallTextColor text-sm py-2 px-4 rounded-[8px] max-h-[40px] hover:text-white  ease-in duration-300">
              Seguir
            </button>
            <Popover as="div" className="relative inline-block text-left">
              <div>
                <Popover.Button
                  onClick={handleMenuClick}
                  class="flex items-center"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                      fill="rgba(101,166,117,1)"
                    ></path>
                  </svg>
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
                <Popover.Panel className="absolute right-0 z-10 mt-4 w-[16rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {({ close }) => (
                    <div className="py-1">
                      <Popover.Panel>
                        {({ active }) => (
                          <div className="flex flex-col p-4 ">
                            <Link
                              onClick={() => close()}
                              to="#"
                              className="leading-none py-2"
                            >
                              Ocultar projeto
                            </Link>
                            <Link
                              onClick={() => close()}
                              to="#"
                              className="leading-none py-2"
                            >
                              Denunciar projeto
                            </Link>
                            <div className="flex items-center">
                              <span
                                onClick={() => close()}
                                to="#"
                                className="leading-none py-2"
                              >
                                Compartilhar:
                              </span>
                              <Link
                                onClick={() => close()}
                                to="#"
                                className="leading-none py-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="18"
                                  height="18"
                                  className="ml-2"
                                >
                                  <path
                                    d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                                    fill="rgba(101,166,117,1)"
                                  ></path>
                                </svg>
                              </Link>
                              <Link
                                onClick={() => close()}
                                to="#"
                                className="leading-none py-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="18"
                                  height="18"
                                  className="ml-2"
                                >
                                  <path
                                    d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"
                                    fill="rgba(101,166,117,1)"
                                  ></path>
                                </svg>
                              </Link>
                              <Link
                                onClick={() => close()}
                                to="#"
                                className="leading-none py-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="18"
                                  height="18"
                                  className="ml-2"
                                >
                                  <path
                                    d="M15.3499 5.5498C13.7681 5.5498 12.4786 6.81785 12.4504 8.39633L12.4223 9.97138C12.4164 10.3027 12.143 10.5665 11.8117 10.5606C11.7881 10.5602 11.7646 10.5584 11.7413 10.5552L10.1805 10.3423C8.12699 10.0623 6.15883 9.11711 4.27072 7.54387C3.67275 10.8535 4.84 13.147 7.65342 14.9157L9.40041 16.014C9.68095 16.1904 9.7654 16.5608 9.58903 16.8413C9.54861 16.9056 9.49636 16.9616 9.43504 17.0064L7.84338 18.1693C8.78973 18.2288 9.68938 18.1873 10.435 18.0385C15.1526 17.097 18.2897 13.5468 18.2897 7.69084C18.2897 7.21275 17.2774 5.5498 15.3499 5.5498ZM10.4507 8.36066C10.4983 5.69559 12.6735 3.5498 15.3499 3.5498C16.7132 3.5498 17.9465 4.10658 18.8348 5.00515C19.5462 4.9998 20.1514 5.17966 21.5035 4.35943C21.1693 5.9998 21.0034 6.71177 20.2897 7.69084C20.2897 15.3324 15.5926 19.0487 10.8264 19.9998C7.5587 20.6519 2.80646 19.5812 1.44531 18.1584C2.13874 18.1051 4.95928 17.8018 6.58895 16.6089C5.20994 15.6984 -0.278631 12.4679 3.32772 3.78617C5.02119 5.76283 6.73797 7.10831 8.47807 7.82262C9.63548 8.29774 9.91978 8.28825 10.4507 8.36066Z"
                                    fill="rgba(101,166,117,1)"
                                  ></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
        <Link className="text-xl my-4 hover:underline">
          Projeto Carbon Free
        </Link>
        <span className="text-base text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          incidunt sequi ex ipsa vero accusantium quae excepturi reiciendis. Aut
          accusamus aliquid nihil non similique, aperiam eaque porro deleniti
          ullam tempora? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Omnis, tenetur? Error, quod eligendi aperiam molestiae dicta non
          delectus eveniet voluptatem culpa voluptates modi praesentium fugiat
          repudiandae! Sit perspiciatis architecto at!
        </span>
        <div className="bg-img-project bg-cover w-full h-[250px] rounded-md mt-4"></div>
        <div className="flex items-center mt-4">
          <div className="flex">
            <span className="text-lg">Categorias:</span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Conservação ambiental
            </span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Empreendedorismo social
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 rounded-xl border border-gray-300 shadow-md p-4 ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="bg-img-carbonfree bg-cover h-[56px] w-[56px] rounded-full"></div>
            <Link className="flex flex-col ml-2">
              <span className="text-lg leading-none">Carbon Free</span>
              <span className="text-sm">2.293 seguidores</span>
            </Link>
          </div>
          <div className="flex items-center">
            <button class="flex items-center gap-2 text-white bg-smallTextColor text-sm py-2 px-4 rounded-[8px] max-h-[40px] hover:text-white  ease-in duration-300">
              Seguir
            </button>
            <Popover as="div" className="relative inline-block text-left">
              <div>
                <Popover.Button
                  onClick={handleMenuClick}
                  class="flex items-center"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                      fill="rgba(101,166,117,1)"
                    ></path>
                  </svg>
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
                <Popover.Panel className="absolute right-0 z-10 mt-4 w-[16rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {({ close }) => (
                    <div className="py-1">
                      <Popover.Panel>
                        {({ active }) => (
                          <div className="flex flex-col p-4 ">
                            <Link
                              onClick={() => close()}
                              to="#"
                              className="leading-none py-2"
                            >
                              Ocultar projeto
                            </Link>
                            <Link
                              onClick={() => close()}
                              to="#"
                              className="leading-none py-2"
                            >
                              Denunciar projeto
                            </Link>
                            <div className="flex items-center">
                              <span
                                onClick={() => close()}
                                to="#"
                                className="leading-none py-2"
                              >
                                Compartilhar:
                              </span>
                              <Link
                                onClick={() => close()}
                                to="#"
                                className="leading-none py-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="18"
                                  height="18"
                                  className="ml-2"
                                >
                                  <path
                                    d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                                    fill="rgba(101,166,117,1)"
                                  ></path>
                                </svg>
                              </Link>
                              <Link
                                onClick={() => close()}
                                to="#"
                                className="leading-none py-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="18"
                                  height="18"
                                  className="ml-2"
                                >
                                  <path
                                    d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"
                                    fill="rgba(101,166,117,1)"
                                  ></path>
                                </svg>
                              </Link>
                              <Link
                                onClick={() => close()}
                                to="#"
                                className="leading-none py-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="18"
                                  height="18"
                                  className="ml-2"
                                >
                                  <path
                                    d="M15.3499 5.5498C13.7681 5.5498 12.4786 6.81785 12.4504 8.39633L12.4223 9.97138C12.4164 10.3027 12.143 10.5665 11.8117 10.5606C11.7881 10.5602 11.7646 10.5584 11.7413 10.5552L10.1805 10.3423C8.12699 10.0623 6.15883 9.11711 4.27072 7.54387C3.67275 10.8535 4.84 13.147 7.65342 14.9157L9.40041 16.014C9.68095 16.1904 9.7654 16.5608 9.58903 16.8413C9.54861 16.9056 9.49636 16.9616 9.43504 17.0064L7.84338 18.1693C8.78973 18.2288 9.68938 18.1873 10.435 18.0385C15.1526 17.097 18.2897 13.5468 18.2897 7.69084C18.2897 7.21275 17.2774 5.5498 15.3499 5.5498ZM10.4507 8.36066C10.4983 5.69559 12.6735 3.5498 15.3499 3.5498C16.7132 3.5498 17.9465 4.10658 18.8348 5.00515C19.5462 4.9998 20.1514 5.17966 21.5035 4.35943C21.1693 5.9998 21.0034 6.71177 20.2897 7.69084C20.2897 15.3324 15.5926 19.0487 10.8264 19.9998C7.5587 20.6519 2.80646 19.5812 1.44531 18.1584C2.13874 18.1051 4.95928 17.8018 6.58895 16.6089C5.20994 15.6984 -0.278631 12.4679 3.32772 3.78617C5.02119 5.76283 6.73797 7.10831 8.47807 7.82262C9.63548 8.29774 9.91978 8.28825 10.4507 8.36066Z"
                                    fill="rgba(101,166,117,1)"
                                  ></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
        <Link className="text-xl my-4 hover:underline">
          Projeto Carbon Free
        </Link>
        <span className="text-base text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          incidunt sequi ex ipsa vero accusantium quae excepturi reiciendis. Aut
          accusamus aliquid nihil non similique, aperiam eaque porro deleniti
          ullam tempora? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Omnis, tenetur? Error, quod eligendi aperiam molestiae dicta non
          delectus eveniet voluptatem culpa voluptates modi praesentium fugiat
          repudiandae! Sit perspiciatis architecto at!
        </span>
        <div className="bg-img-project bg-cover w-full h-[250px] rounded-md mt-4"></div>
        <div className="flex items-center mt-4">
          <div className="flex">
            <span className="text-lg">Categorias:</span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Conservação ambiental
            </span>
            <span className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ml-2">
              Empreendedorismo social
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCenter;
