import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div class="m-0 box-border p-0">
      <div class="h-max w-full bg-slate-500 p-6">
        <div class="md:mx-24 mx-10 flex md:items-center md:justify-between flex-col ">
          <h3 class="md:text-lg w-full text-sm text-gray-200-200">
            Copyright © 2022 All Rights Reserved | JavaScript Projects
          </h3>
          <p class="text-lg text-slate-200">
            Made with <span>❤</span> by{" "}
            <span class="font-bold text-purple-700">Ankit</span> Kumar
          </p>
          <div class="flex justify-between ">
            <a
              class="mr-2 hover:border-solid hover:border-[#4225e9f5]  text-white bg-[#4225e9f5] hover:text-[#4225e9f5] hover:bg-white flex h-12 w-12 items-center justify-center rounded-full bg-white"
              href=""
              target="_blank"
            >
              <AiFillGithub size={20} />
            </a>
            <a
              class="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-white"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={20} />
            </a>
            <a
              class="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-white"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={20} />
            </a>
            <a
              class="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-white"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
