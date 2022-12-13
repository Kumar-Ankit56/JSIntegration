import React from "react";
import BasicProjectData from "./BasicProjectData";
import { AiFillGithub } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import Captcha from "../assets/projectImg/Captcha.png";

function BasicProject() {
  return (
    <div
      name="Project"
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
            <div
              key={Project.id}
              className="relative mt-8 flex h-[13rem] min-w-[30rem] max-w-[80rem] flex-row overflow-hidden rounded-xl bg-[rgba(252,252,252)] text-center shadow-md duration-150 hover:scale-105 hover:shadow-lg sm:min-w-[60rem] md:min-w-[60rem]"
            >
              <img
                className="flex-grow-1 shrink-1 relative h-[18rem] w-[25%]  sm:w-[28%] md:sm:w-[28%] basis-[20rem] sm:basis-[28rem] md:basis-[28rem]object-cover"
                src={Project.src}
                alt="project"
              />
              <div className="flex-grow-1 shrink-1 relative flex basis-[30rem] md:basis-[60rem]  sm:basis-[60rem] flex-col flex-wrap p-4">
                <h3 className="ml-8 md:px-2 py-0 px-1 text-left mdtext-2xl text-base  font-semibold text-[#012970]">
                  {Project.title}
                </h3>
                <p className="ml-6 md:p-2  p-0 m-0 text-left text-sm md:text-base text-[rgba(70,70,70)]">
                  {Project.dec}
                </p>
                <div className="flex items-start justify-between p-1 sm:p-2 pt-5">
                  <a
                    href={Project.githubUrl}
                    className="ml-8 inline rounded-sm border-2 border-solid border-[#4235c7f5]  md:px-4 md:py-4 px-2 py-2 font-sans text-xl leading-3 text-[rgba(14,14,14)] hover:bg-[#4235c7f5] hover:text-white"
                  >
                    <AiFillGithub size={30} />
                  </a>
                  <a
                    href={Project.link}
                    className="ml-8 inline rounded-sm border-2 border-solid border-[#4235c7f5] md:px-4 md:py-4 px-2 py-2 font-sans text-xl leading-3 text-[rgba(14,14,14)] hover:bg-[#4235c7f5] hover:text-white"
                  >
                    <BiDesktop size={30} />
                  </a>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default BasicProject;
