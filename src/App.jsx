import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function Main() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Routes>
        <Route path="/Project" element={<Project />} exact />
      </Routes>
    </div>
  );
}

export default Main;
