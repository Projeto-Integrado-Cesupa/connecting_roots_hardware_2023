import React from "react";
import { Link, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className="container">
      <div className="flex flex-col ">
        <span className="text-3xl py-6 ml-20">Minha conta</span>
        <div className="flex shadow-md b-px rounded-md border-gray-300  b-px border">
          <div className="flex flex-col bg-smallTextColor rounded-s-md h-96 w-80 items-center w-96">
            <Link
              to=""
              className="focus:bg-secondColor text-xl z-[2] flex w-full hover:bg-secondColor rounded-tl-md px-2.5 py-2.5 items-center font-medium leading-tight text-white  transition duration-150 ease-in-out "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="m-[1rem]"
              >
                <path
                  d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
              <span className="text-xl ml-2">Informações Pessoais</span>
            </Link>
            <Link
              to="Password"
              class="focus:bg-secondColor text-xl relative z-[2] flex w-full hover:bg-secondColor px-2.5 py-2.5 items-center font-medium leading-tight text-white  transition duration-150 ease-in-out "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="m-[1rem]"
              >
                <path
                  d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
              <span className="ml-2 text-xl">Senha</span>
            </Link>
            <Link
              to="NotificationsAndAlerts"
              class="focus:bg-secondColor text-xl relative z-[2] flex w-full hover:bg-secondColor px-2.5 py-2.5 items-center font-medium leading-tight text-white  transition duration-150 ease-in-out "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="m-[1rem]"
              >
                <path
                  d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
              <span className="ml-2 text-xl">Notificações e Alertas</span>
            </Link>
            <Link
              to="BenefitPlans"
              class="focus:bg-secondColor text-xl relative z-[2] flex w-full hover:bg-secondColor px-2.5 py-2.5 items-center font-medium leading-tight text-white  transition duration-150 ease-in-out "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="m-[1rem]"
              >
                <path
                  d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
              <span className="ml-2 text-xl">Plano de Benefícios</span>
            </Link>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
