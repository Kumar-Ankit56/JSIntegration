import React from "react";
import siteLogo from "../Components/site-img/sitelogo.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function Home() {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center text-center md:text-left h-full relative">
          <h2 className="text-7xl md:text-7xl font-bold text-indigo-800">
            Welcome to Javascript Projects
          </h2>
          <h3 className="text-yellow-500 py-8 mt-5 text-3xl sm:text-3xl sm:font-medium">
            <Typed
              strings={[
                "Build API Based Project",
                "Build Analog and Digital Clock",
                "Build Linktree Clone",
                "Build BMI Calculator",
                "Build Country Details App",
                "Build Many More",
              ]}
              typeSpeed={250}
              backSpeed={200}
              loop
            />
          </h3>
          <div className="px-4 py-4 w-[8rem] mx-auto md:mx-0 rounded-md bg-[#3e049b] text-white shadow-xl">
            <Link to="/Project" className="">
              <span className="">Get Started</span>
            </Link>
          </div>
        </div>

        <div className="w-[70%] animate-bounce">
          <img
            src={siteLogo}
            alt="my profile"
            className="rounded-2xl mx-auto mb-8 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
