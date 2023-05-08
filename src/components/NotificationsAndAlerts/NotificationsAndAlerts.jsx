import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
const NotificationsAndAlerts = () => {
  const [enabled1, setEnabled1] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);
  const [enabled4, setEnabled4] = useState(false);
  const [enabled5, setEnabled5] = useState(false);

  return (
    <div className="p-6">
      <div className="flex flex-col">
        <span className="text-xl font-[500] pb-4">Notificações e Alertas</span>
        <div className="flex items-center mb-4">
          <Switch
            checked={enabled1}
            onChange={setEnabled1}
            className={`${enabled1 ? "bg-smallTextColor" : "bg-gray-300"}
          relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled1 ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className="text-lg ml-2">Quando me enviam uma mensagem</span>
        </div>
        <div className="flex items-center mb-4">
          <Switch
            checked={enabled2}
            onChange={setEnabled2}
            className={`${enabled2 ? "bg-smallTextColor" : "bg-gray-300"}
          relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled2 ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className="text-lg ml-2">Quando me convidam para um projeto</span>
        </div>
        
        <div className="flex items-center mb-4">
          <Switch
            checked={enabled3}
            onChange={setEnabled3}
            className={`${enabled3 ? "bg-smallTextColor" : "bg-gray-300"}
          relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled3 ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className="text-lg ml-2">Quando meu perfil receber uma atualização</span>
        </div>
        
        <div className="flex items-center mb-4">
          <Switch
            checked={enabled4}
            onChange={setEnabled4}
            className={`${enabled4 ? "bg-smallTextColor" : "bg-gray-300"}
          relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled4 ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className="text-lg ml-2">Quando uma das minhas propostas é aceita</span>
        </div>
        
        <div className="flex items-center">
          <Switch
            checked={enabled5}
            onChange={setEnabled5}
            className={`${enabled5 ? "bg-smallTextColor" : "bg-gray-300"}
          relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled5 ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className="text-lg ml-2">Receber as novidades da plataforma</span>
        </div>
        
        
      </div>
    </div>
  );
};

export default NotificationsAndAlerts;
