import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="m-0 p-0 box-border">
      <div className="bg-slate-500 w-full h-max p-8 flex justify-between items-center">
        <div>Copyright © 2022 All Rights Reserved | JavaScript Projects</div>
        <div>
          Made with <span>❤</span> by Ankit Kumar
        </div>
        <div>
          <a className="" href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <AiFillGithub />
          </a>
          <a className="" href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <BsInstagram />
          </a>
          <a className="" href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <AiFillGithub />
          </a>
          <a className="" href="" target="_blank" rel="noopener noreferrer">
            {" "}
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
