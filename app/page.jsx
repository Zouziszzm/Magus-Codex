"use client";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import LanguageContext from "@/context/LanguageContext";
import { MdSunny } from "react-icons/md";
import { BsFillMoonFill, BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";

const page = () => {
  const { isDark, setIsDark, toggleDarkMode } = useContext(ThemeContext);
  const { Lang, setLang, toggleLang } = useContext(LanguageContext);

  const handleTheme = () => {
    toggleDarkMode();
  };

  const handelLang = () => {
    toggleLang();
  };
  const handelLanguage = () => { };
  return (
    <>
      <div className="flex justify-center">
        <div className="p-1 flex justify-end gap-1 vs:w-full md:w-[70%]">
          <div
            className="w-[30px] h-[30px] p-2 icon_border border-[1px] flex items-center cursor-pointer"
            onClick={handleTheme}
          >
            {isDark ? (
              <MdSunny className="icon_color" />
            ) : (
              <BsFillMoonFill className="icon_color" />
            )}
          </div>
          <div
            className="w-[30px] h-[30px] p-2 icon_border border-[1px] flex items-center justify-center cursor-pointer"
            onClick={toggleLang}
          >
            {Lang ? (
              <p className="font-noto text-sm icon_color">En</p>
            ) : (
              <p className="font-noto text-sm icon_color">Jp</p>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default page;
