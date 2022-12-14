import React from "react";
import APIProjectData from "./APIProjectData";
import { AiFillGithub } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";

function APIBased() {
  return (
    <div
      name="APIProject"
      className="bg-gradient-to-b bg-[#d9f8ef] w-full h-max text-white  md:h-max"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="text-center relative">
          <h3 className=" text-2xl sm:text-3xl md:text-5xl font-medium text-indigo-800 mt-6 tracking-wider">
            OverView of API Based Projects
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 mt-14 md:grid-cols-3 gap-20 place-content-center sm:px-0">
          {APIProjectData.map((ProjectD) => (
            <div
              key={ProjectD.id}
              className=" shadow-xl hover:-translate-y-4 bg-white w-[21rem] rounded-lg h-[25rem] overflow-hidden text-center relative"
            >
              <img
                src={ProjectD.src}
                alt=""
                className="group rounded-md h-[100%] bg-contain w-full relative duration-200"
              />
              <div className="hover:-translate-y-60 cursor-pointer absolute bg-white duration-700 -translate-y-14 p-4 text-center flex flex-col">
                <h1 className="text-2xl tracking-wider text-indigo-600 font-medium px-1 py-0">
                  {ProjectD.title}
                </h1>
                <p className="text-base mt-3 text-gray-600 text-left ml-6">
                  {ProjectD.dec}
                </p>
                <div className="flex p-4 justify-between items-center">
                  <a
                    className="w-[4rem] px-4 py-2 rounded-lg text-white bg-[#4225e9f5]"
                    href={ProjectD.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size={30} />
                  </a>
                  <a
                    className="w-[4rem] px-4 py-2 rounded-lg text-white bg-[#4225e9f5]"
                    href={ProjectD.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiDesktop size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default APIBased;
