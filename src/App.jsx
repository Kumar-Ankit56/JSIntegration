import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import APIBased from "./pages/APIBased";
import BasicProject from "./pages/BasicProject";
import Footer from "./pages/footer";

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <Project />
      <BasicProject />
      <APIBased />
      <Footer />
    </div>
  );
}

export default Main;
