import React from "react";
import ProjectData from "../pages/data";
import { AiFillGithub } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";

function Project() {
  return (
    <div
      name="Project"
      className="bg-gradient-to-b bg-[#f9f6fe] w-full h-max text-white  md:h-max"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="text-center relative">
          <h3 className=" text-2xl sm:text-3xl md:text-5xl font-medium text-indigo-800 mt-6 tracking-wider">
            <span className="absolute bg-yellow-400 hidden sm:block sm:w-20 sm:top-11 sm:left-14 sm:h-1 md:left-6 md:top-12 lg:w-40"></span>
            OverView of Projects
            {/* w-20 md:w-28 h-1 top-11 md:top-12 right-14
            md:right-28 */}
            <span className="absolute bg-yellow-400 top-14 w-24 h-1 mt-3 right-[40%] sm:w-20 sm:top-8 sm:right-16 md:right-5 md:top-10 lg:w-40"></span>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 mt-14 md:grid-cols-3 gap-20 place-content-center sm:px-0">
          {ProjectData.map((ProjectD) => (
            <div
              key={ProjectD.id}
              className="shadow-xl hover:-translate-y-4 bg-white w-[21rem] rounded-lg h-[33rem] overflow-hidden text-center relative"
            >
              <img
                src={ProjectD.src}
                alt=""
                className="rounded-md h-[70%] bg-contain w-full relative duration-200 hover:scale-105"
              />
              <div className="relative p-4 text-center flex flex-col">
                <h1 className="text-xl text-indigo-600 font-medium px-1 py-0">
                  {ProjectD.title}
                </h1>
                <p className="text-base text-gray-600 text-left ml-6">
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

export default Project;

// h-[70%] bg-contain w-full relative
// bg-white shadow-xl  w-[30rem] h-[35rem] overflow-hidden text-left rounded-lg relative
