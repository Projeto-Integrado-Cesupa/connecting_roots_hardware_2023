import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { RadioGroup } from "@headlessui/react";

const categories = [
  {
    title: "Categoria 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    title: "Categoria 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
];

const StepOne = () => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className=" scrollbar overflow-auto h-[440px]">
            <span className="text-xl ml-4 font-[500]">Escolha a categoria do projeto</span>
            <div className="">
              {" "}
              <RadioGroup value={selected} onChange={setSelected}>
                <div className="space-y-2 flex flex-wrap my-4">
                  {categories.map((category) => (
                    <RadioGroup.Option
                      key={category.title}
                      value={category}
                      className={({ active, checked }) =>
                        `${active ? "" : ""}
                  ${
                    checked
                      ? "bg-smallTextColor bg-opacity-75 text-white"
                      : "bg-white"
                  }
                      flex cursor-pointer mr-4 w-[330px] rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? "text-white" : "text-gray-900"
                                  }`}
                                >
                                  {category.title}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className={`inline ${
                                    checked ? "text-sky-100" : "text-gray-500"
                                  }`}
                                >
                                  <span>{category.description}</span>{" "}
                                </RadioGroup.Description>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="18"
                                  height="18"
                                >
                                  <path
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                                    fill="rgba(255,255,255,1)"
                                  ></path>
                                </svg>{" "}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
  );
};

export default StepOne;
