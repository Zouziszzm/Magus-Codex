import { useContext, useEffect } from "react";
import { LuCloudMoon, FiSun } from "../Icons/Icons.js";
import AnimateContext from "@/context/AnimateContext.js";
import ThemeContext from "@/context/ThemeContext.js";
import LanguageContext from "@/context/LanguageContext.js";
import Time from "../Time/Time.jsx";
import { motion } from "framer-motion";
const Nav = ({ className }) => {
  const { isDark, setIsDark, toggleDarkMode } = useContext(ThemeContext);
  const { Lang, setLang, toggleLang } = useContext(LanguageContext);
  const { controls, animationVariants } = useContext(AnimateContext);

  const handelTheme = () => {
    toggleDarkMode();
    controls.set("initial");
    controls.start("animate");
  };

  const handelLang = () => {
    toggleLang();
    controls.set("initial");
    controls.start("animate");
  };

  useEffect(() => {
    controls.set("initial");
    controls.start("animate");
  });

  return (
    <>
      <motion.div
        animate={controls}
        variants={animationVariants}
        className={className}
      >
        <div className="p-2 flex justify-center">
          <div className="p-2 vs:w-full lg:w-[70%]">
            <div className="flex justify-between items-center">
              <div className="w-[45px] h-[30px]">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 117 30"
                  fill={isDark ? "#212529" : "#f8f9fa"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M58.184 61H35.72L34.376 45.736H16.616L9.8 61H0.488L28.808 0.0399952H51.56L58.184 61ZM19.784 38.728H33.704L31.496 12.616L19.784 38.728ZM75.71 0.0399952H116.126L114.59 7.336H94.91L91.166 24.904H107.582L106.046 32.296H89.63L83.486 61H62.75L75.71 0.0399952Z" />
                </svg>
              </div>
              <Time className="text-sm font-noto font-medium icon_color" />
              <div className="flex gap-1">
                <div
                  className="w-[30px] h-[30px] border-[1px] icon_border flex justify-center items-center cursor-pointer"
                  onClick={handelLang}
                >
                  {Lang ? (
                    <p className="font-medium text-sm icon_color">Jp</p>
                  ) : (
                    <p className="font-medium text-sm icon_color">En</p>
                  )}
                </div>

                <div
                  className="w-[30px] h-[30px] border-[1px] icon_border flex justify-center items-center cursor-pointer"
                  onClick={handelTheme}
                >
                  {isDark ? (
                    <LuCloudMoon className="icon_color" />
                  ) : (
                    <FiSun className="icon_color" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
