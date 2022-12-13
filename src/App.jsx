import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import APIBased from "./pages/APIBased";
import BasicProject from "./pages/BasicProject";

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <Project />
      <BasicProject />
      {/* <BasicProject2 /> */}
    </div>
  );
}

export default Main;
