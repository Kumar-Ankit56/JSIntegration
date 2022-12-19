import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div class="m-0 box-border p-0">
      <div class="h-max w-full bg-slate-500 p-6">
        <div class="mx-24 flex items-center justify-around">
          <h3 class="text-gray-200-200 w-full text-lg">
            Copyright © 2022 All Rights Reserved | JavaScript Projects
          </h3>
          <p class="text-lg flex-none text-slate-200">
            Made with <span>❤</span> by{" "}
            <span class="font-bold text-purple-700">Ankit</span> Kumar
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
