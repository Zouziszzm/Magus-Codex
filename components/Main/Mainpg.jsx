import { useState, useEffect } from "react";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Nav from "../Nav/Nav.jsx";
import Profesional_journey from "../prof_Journey/Profesional_journey.jsx";
import Projects from "../Projects/Projects.jsx";
import CopyRight from "../CopyRight/CopyRight.jsx";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
const Mainpg = () => {
  const [showGoToTopButton, setShowGoToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButtonThreshold = 200; // Adjust this value based on when you want the button to appear

      setShowGoToTopButton(scrollY > showButtonThreshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Nav className="z-10 fixed w-full backdrop-blur-[10px]" />
      <Home />
      <About />
      <Profesional_journey />
      <Projects />
      <div className="z-10 bottom-0 right-[0%] flex justify-end fixed w-full p-4 ">
        {showGoToTopButton && (
          <button
            className="go-to-top-button w-[25px] h-[25px] border-[1px] icon_border p-[2px]"
            onClick={goToTop}
          >
            <MdOutlineVerticalAlignTop className="icon_color w-full h-full" />
          </button>
        )}
      </div>
      <CopyRight />
    </>
  );
};

export default Mainpg;
