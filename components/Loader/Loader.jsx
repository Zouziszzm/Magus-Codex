"use client";
import { useState, useContext, useEffect } from "react";
import { LuCloudMoon, FiSun } from "../Icons/Icons.js";
import Time from "../Time/Time.jsx";
import ThemeContext from "@/context/ThemeContext.js";
import LanguageContext from "@/context/LanguageContext.js";
import AnimateContext from "@/context/AnimateContext.js";
import Svg from "../Svgs/Svg.jsx";
import { animate, motion } from "framer-motion";

const Loader = ({ redirect }) => {
  const [out, setOut] = useState(false);
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
  }, [controls]);

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="p-2 vs:w-full lg:w-[70%]">
          <div className="flex justify-between items-center">
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
        <div className="p-2 h-[100%] vs:w-full lg:w-[70%]">
          <div className="flex justify-center p-4 gap-2">
            <motion.div
              className="flex font-noto items-center font-black icon_color text-3xl"
              animate={controls}
              variants={animationVariants}
            >
              {Lang ? (
                <>
                  <p className="">0</p>
                  <p className="">2</p>
                </>
              ) : (
                <>
                  <p className="">0</p>
                  <p className="">2</p>
                </>
              )}
            </motion.div>
            <motion.div
              className="w-[5px] flex items-center"
              animate={controls}
              variants={animationVariants}
            >
              <div className="w-[5px] bgcoloediv h-[80%]"></div>
            </motion.div>
            <motion.div
              className="font-noto font-bold icon_color"
              animate={controls}
              variants={animationVariants}
            >
              {Lang ? (
                <>
                  <h2 className="text-2xl">Portfolio</h2>
                  <h1 className="text-2xl">AlFarhaanKhan</h1>
                </>
              ) : (
                <>
                  <h2 className="text-xl">ポートフォリオ</h2>
                  <h1 className="text-xl">アルファーハーン・カーン</h1>
                </>
              )}
            </motion.div>
          </div>
          <motion.div
            className="flex h-[60%] justify-center items-center p-4 my-8"
            animate={controls}
            variants={animationVariants}
          >
            <div className="h-fit mr-[-30px]">
              <Svg />
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center items-center h-[15%]"
            animate={controls}
            variants={animationVariants}
          >
            <div
              className="flex h-fit icon_color font-noto cursor-pointer flex-col items-center justify-center"
              onClick={() => {
                redirect(true);
              }}
            >
              {Lang ? (
                <>
                  <p className="font-medium">HomePage</p>
                  <div className="h-[5px] bgcoloediv w-full m-1 flex items-center relative overflow-hidden">
                    <motion.div
                      initial={{ left: "0%", right: "100%" }}
                      animate={{
                        left: "100%",
                        right: "0%",
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="h-[5px] w-[5px] bgcolorinverse absolute"
                    ></motion.div>
                  </div>
                </>
              ) : (
                <>
                  <p className="font-bold">ホームページ,</p>
                  <div className="h-[5px] bgcoloediv w-full m-1 flex items-center relative overflow-hidden">
                    <motion.div
                      initial={{ left: "0%", right: "100%" }}
                      animate={{
                        left: "100%",
                        right: "0%",
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="h-[5px] w-[5px] bgcolorinverse absolute"
                    ></motion.div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Loader;
