import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div class="min-h-screen flex flex-col items-center login justify-center bg-gray-200">
      <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div class="font-medium self-center text-xl sm:text-3xl  text-gray-800">
          {isSignUp ? "Cadastro" : "Login"}
        </div>

        <div class="mt-10">
          <form action="#">
            {isSignUp && (
              <div className="flex justify-around">
                <div class="flex flex-col mb-6 mr-3">
                  <label
                    for="firstname"
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Nome:
                  </label>
                  <div class="relative">
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-6 ml-3">
                  <label
                    for="lastname"
                    class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Sobrenome:
                  </label>
                  <div class="relative">
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            <div class="flex flex-col mb-6">
              <label
                for="email"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-mail:
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Senha:
              </label>
              <div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
            </div>
            {isSignUp && (
              <div class="flex flex-col mb-6">
                <label
                  for="confirmpassword"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Confirme a senha:
                </label>
                <div>
                  <input
                    id="confirmpassword"
                    type="password"
                    name="confirmpassword"
                    class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>
              </div>
            )}
            {isSignUp && (
              <div class="flex items-center mb-6 -mt-4">
                <div class="flex ml-auto">
                  <a
                    href="#"
                    class="inline-flex text-xs sm:text-sm text-primaryColor hover:text-smallTextColor"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
            )}
            <div class="flex w-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/Dashboard";
                }}
                type="submit"
                class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-smallTextColor hover:bg-primaryColor border  rounded py-2 w-full transition duration-150 ease-in"
              >
                <span class="mr-2 uppercase">
                  {isSignUp ? "Cadastrar" : "Login"}
                </span>
              </button>
            </div>
          </form>
        </div>
        <div class="flex justify-center items-center mt-6">
          <a
            onClick={() => {
              setIsSignUp((prev) => !prev);
            }}
            target="_blank"
            class="inline-flex items-center font-bold text-primaryColor hover:text-smallTextColor text-xs text-center cursor-pointer"
          >
            <span>
              <i class={isSignUp ? "none" : "ri-user-add-line"}></i>
            </span>
            <span class="ml-2">
              {isSignUp ? "Já tenho uma conta" : "Ainda não tem uma conta?"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
