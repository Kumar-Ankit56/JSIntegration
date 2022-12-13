import React, { useState, useEffect } from "react";
import logo from "./site-img/jslogo.jpg";
import { AiOutlineClose, AiOutlineMenu, AiFillMail } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    const handleSadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleSadow);
  }, []);

  return (
    <div>
      <div className="fixed w-full h-20 bg-[#3e049b] shadow-2xl z-10 md:z-50">
        <div className="flex items-center justify-between px-20 py-4 md:px-40 ">
          <div className="w-[40px] h-[40px] flex items-center ">
            <img
              style={{ borderRadius: "5px" }}
              className="mr-3"
              src={logo}
              alt="logo"
            />

            <p className="ml-1 text-white font-medium text-3xl">Project</p>
          </div>
          <div className="">
            <ul className="hidden md:flex ">
              <Link to="Home" smooth={true} duration={500}>
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-yellow-400 hover:border-b hover:border-b-yellow-400">
                  Home
                </li>
              </Link>
              <Link to="Project" smooth={true} duration={500}>
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-yellow-400 hover:border-b hover:border-b-yellow-400">
                  Project
                </li>
              </Link>
              <Link to="basicProject" smooth={true} duration={500}>
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-yellow-400 hover:border-b hover:border-b-yellow-400">
                  Basic
                </li>
              </Link>
              <Link to="APIBased">
                <li className="ml-10 cursor-pointer text-xl text-white uppercase hover:text-yellow-400 hover:border-b hover:border-b-yellow-400">
                  API Based
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="text-white md:hidden">
              <AiOutlineMenu size={30} />
            </div>
          </div>
        </div>
      </div>

      {/* --BreackPointforsmall-device---- */}
      <div
        className={
          !nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-40"
            : " "
        }
      >
        <div
          className={
            !nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%]  md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500 z-50"
              : "fixed left-[-100%] p-5 ease-in duration-500 z-50"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full mt-5">
              <img
                style={{ borderRadius: "5px" }}
                src={logo}
                alt="/"
                width="70"
                height="20"
              />
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-16 border-b text-center border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4 ml-2 text-xl text-[#693cb0] font-medium">
                Let's build something together
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-1">
            <ul className="uppercase items-center">
              <Link to="/">
                <li className=" hover:text-yellow-400 hover:border-b hover:border-b-yellow-400  py-4 text-xl uppercase text-black font-medium ">
                  Home
                </li>
              </Link>
              <Link to="/Project">
                <li className=" hover:text-yellow-400 hover:border-b hover:border-b-yellow-400 py-4 text-xl uppercase text-black font-medium ">
                  Project
                </li>
              </Link>
              <li className=" hover:text-yellow-400 hover:border-b hover:border-b-yellow-400 py-4 text-xl uppercase text-black font-medium ">
                Basic
              </li>
              <li className=" hover:text-yellow-400 hover:border-b hover:border-b-yellow-400 py-4 text-xl uppercase text-black font-medium ">
                API Based
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// shadow
//             ? "fixed w-full h-20 bg-[#3e049b] shadow-2xl z-50"
//             : "fixed w-full h-20 bg-[#3e049b] "
