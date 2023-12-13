import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
import LanguageContext from "@/context/LanguageContext.js";
import Svgtwo from "../Svgs/Svgtwo";
const Home = () => {
  const { Lang, setLang, toggleLang } = useContext(LanguageContext);
  const { controls, animationVariants } = useContext(AnimateContext);
  const handelLang = () => {
    toggleLang();
    controls.set("initial");
    controls.start("animate");
  };

  return (
    <>
      <motion.div
        animate={controls}
        variants={animationVariants}
        className="h-screen relative"
      >
        <div className="flex justify-center h-full items-center">
          <div className="flex flex-wrap items-center justify-center vs:w-[85%]">
            <div className="flex p-4 flex-wrap flex-col gap-3 vs:w-full lg:w-2/3">
              <h1 className="font-noto introcontrast font-bold w-full vs:text-2xl lg:text-4xl">
                {Lang ? "Hello there!" : "こんにちは！"}
              </h1>
              <h1 className="font-noto icon_color font-bold w-full vs:text-3xl lg:text-5xl">
                {Lang ? (
                  <>
                    <div className="">
                      <p className="flex flex-wrap">
                        <p className="introcontrast mr-4">I&apos;m</p>AlFarhaan
                        Khan Inamdar
                      </p>
                    </div>
                  </>
                ) : (
                  "アルファルハーン・カーン・イナムダル"
                )}
              </h1>
              <h2 className="font-noto icon_color font-bold w-full vs:text-xs md:text-sm">
                {Lang
                  ? "Digital Artisian ( Developer / Pixel Ronin )"
                  : "デジタルアーティスト ( 開発者 / Pixel Ronin )"}
              </h2>
            </div>
            <div className="p-4 vs:w-full lg:w-fit">
              <Svgtwo className="w-full h-full vs:h-[250px]" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
