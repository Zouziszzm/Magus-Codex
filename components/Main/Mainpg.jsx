import { useState, useEffect } from "react";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Nav from "../Nav/Nav.jsx";
import Profesional_journey from "../prof_Journey/Profesional_journey.jsx";
import Projects from "../Projects/Projects.jsx";
import CopyRight from "../CopyRight/CopyRight.jsx";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
const Mainpg = () => {
  return (
    <>
      <Nav className="z-10 fixed w-full backdrop-blur-[10px]" />
      <Home />
      <About />
      <Profesional_journey />
      <Projects />
      <CopyRight />
    </>
  );
};

export default Mainpg;
