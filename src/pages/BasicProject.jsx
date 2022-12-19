import React from "react";
import BasicProjectData from "./BasicProjectData";
import { AiFillGithub } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import Captcha from "../assets/projectImg/Captcha.png";

function BasicProject() {
  return (
    <div
      name="BasicProject"
      className="bg-gradient-to-b bg-[#c9aff6] w-full h-max text-white  md:h-max"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="text-center relative">
          <h3 className=" text-2xl sm:text-3xl md:text-5xl font-medium text-indigo-800 mt-6 tracking-wider">
            Basic Project Using JavaScript
          </h3>
        </div>

        <div className="flex flex-col flex-wrap items-center justify-center">
          {BasicProjectData.map((Project) => {
            console.log(Project.id);
            return (
              <div
                key={Project.id}
                className="relative mt-8 flex h-[13rem] min-w-[30rem] max-w-[80rem] flex-row overflow-hidden rounded-xl bg-[rgba(252,252,252)] text-center shadow-md duration-150 hover:scale-105 hover:shadow-lg sm:min-w-[65rem] md:min-w-[65rem]"
              >
                <img
                  className="md:object-fill flex-grow-1 shrink-1 relative h-[18rem] w-[25%]  sm:w-[28%] md:sm:w-[28%] basis-[20rem] sm:basis-[28rem] md:basis-[28rem]object-cover"
                  src={Project.src}
                  alt="project"
                />
                <div className="flex-grow-1 shrink-1 relative flex basis-[30rem] md:basis-[60rem]  sm:basis-[60rem] flex-col flex-wrap p-4">
                  <h3 className="ml-8 md:px-2 py-0 px-1 text-left md:text-4xl text-base  font-semibold text-[#012970]">
                    {Project.title}
                  </h3>
                  <p className="ml-8 md:px-2 md:pt-4 sm:pt-2 pt-2 p-0 m-0 text-left text-xs md:text-base text-[rgba(70,70,70)]">
                    {Project.dec}
                  </p>
                  <div className="flex items-start justify-around pt-6">
                    <a
                      href={Project.githubUrl}
                      className="w-16 h-12 flex justify-center hover:text-lg hover:border-2 hover:border-solid hover:border-[#4225e9f5] items-center rounded-lg text-white bg-[#4225e9f5] hover:text-[#4225e9f5] hover:bg-white"
                    >
                      <AiFillGithub size={30} />
                    </a>
                    <a
                      href={Project.link}
                      className="w-16 h-12 flex justify-center hover:text-lg hover:border-2 hover:border-solid hover:border-[#4225e9f5] items-center rounded-lg text-white bg-[#4225e9f5] hover:text-[#4225e9f5] hover:bg-white"
                    >
                      <BiDesktop size={30} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BasicProject;
