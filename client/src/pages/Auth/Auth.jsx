import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const initialState = {
    firstName: "",
    lastName: "",
    cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmPassword
        ? signUpRequest()
        : setConfirmPass(false);
    } else {
      loginRequest();
    }
  };

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAlertErrorVisible, setIsAlertErrorVisible] = useState(false);

  const signUpRequest = async () => {
    const client = axios.create({
      baseURL: "http://localhost:3100/sign-up",
    });

    client
      .post(
        "",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          cpf: data.cpf,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status == 201) {
          setIsSignUp(false);
          setIsAlertVisible(true);
          setTimeout(() => {
            setIsAlertVisible(false);
          }, 5000);
        }
      })
      .catch((err) => {
        setIsAlertErrorVisible(true);
        setTimeout(() => {
          setIsAlertErrorVisible(false);
        }, 5000);
      });
  };

  const [isAlertErrorLogin, setIsAlertErrorLogin] = useState(false);

  const loginRequest = async () => {
    const client = axios.create({
      baseURL: "http://localhost:3100/login",
    });

    console.log(data.email, data.password);

    client
      .post(
        "",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          try {
            const token = response.data.access_token;
            window.localStorage.setItem("token", token);
            window.location.href = "/Dashboard";
          } catch (e) {
            console.log(e);
          }
        }
      })
      .catch((err) => {
        setIsAlertErrorLogin(true);
        setTimeout(() => {
          setIsAlertErrorLogin(false);
        }, 5000);
      });
  };

  return (
    <div class="min-h-screen flex flex-col items-center login justify-center bg-gray-200">
      {isAlertErrorLogin && (
        <div class="absolute bottom-96 bg-red-100 border border-red-400 text-red-700 px-4 py-300 rounded">
          <strong class="font-bold">Credenciais inválidas!</strong>
        </div>
      )}

      {isAlertVisible && (
        <div class="absolute bottom-96 bg-green-100 border border-green-400 text-green-700 px-4 py-300 rounded">
          <strong class="font-bold">Conta criada com sucesso!</strong>
        </div>
      )}

      {isAlertErrorVisible && (
        <div
          class="absolute bg-red-100 border border-red-400 text-red-700 px-4 py-300 rounded"
          style={{ marginBottom: "45%" }}
        >
          <strong class="font-bold">Houve um erro na criação da conta</strong>
        </div>
      )}

      <div class="flex flex-col bg-white  shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
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
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={data.firstName}
                      onChange={handleChange}
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
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
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
                  value={data.email}
                  onChange={handleChange}
                  class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              {isSignUp && (
                <div class="flex flex-col">
                  <label
                    for="cpf"
                    class="mb-1 mt-6 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    CPF:
                  </label>
                  <div>
                    <input
                      id="cpf"
                      type="text"
                      name="cpf"
                      value={data.cpf}
                      onChange={handleChange}
                      class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      required
                    />
                  </div>
                </div>
              )}
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
                  value={data.password}
                  onChange={handleChange}
                  class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
            </div>
            {isSignUp && (
              <div class="flex flex-col mb-6">
                <label
                  for="confirmPassword"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Confirme a senha:
                </label>
                <div>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>
              </div>
            )}

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

            <div class="flex w-full">
              <button
                onClick={(e) => {
                  handleSubmit(e);
                  resetForm();
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
