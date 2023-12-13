import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
import LanguageContext from "@/context/LanguageContext.js";
import WpageContext from "@/context/WpageContext.js";
import Link from "next/link";
import Image from "next/image.js";
import { FaAngleRight } from "../Icons/Icons.js";
const HammerKing = () => {
  const { Lang, setLang, toggleLang } = useContext(LanguageContext);
  const { controls, animationVariants } = useContext(AnimateContext);
  const { Wpage, setWpage } = useContext(WpageContext);

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
        className="relative"
      >
        <div className="flex justify-center h-full items-center">
          <div className="flex p-4 mt-[5%] h-fit flex-wrap vs:w-full md:w-[80%] lg:w-[65%]">
            <div className="flex justify-center gap-4 flex-col p-4  icon_color vs:w-full">
              <div className="w-fit">
                <p className="font-noto font-bold text-3xl">
                  {Lang ? "HammerKing" : "ハンマーキング"}
                </p>
                <p className="w-full h-[3px] bgcoloediv"></p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="w-fit my-4">
                  <p
                    className="font-noto font-bold cursor-pointer linkcolor underline underline-offset-[6px] vs:text-sm md:text-lg hover:underline-offset-[7px]"
                    onClick={() => {
                      setWpage("");
                    }}
                  >
                    {Lang ? "projects" : "プロジェクト"}
                  </p>
                </div>
                <div className="text-lg">
                  <FaAngleRight />
                </div>
                <div>
                  <p className="font-noto font-bold italic vs:text-sm md:text-lg">
                    {Lang ? "HammerKing" : "ハンマーキング"}
                  </p>
                </div>
                <div className="p-[2px] px-[4px] badgecolor rounded-sm">
                  <p className="icon_color font-bold min-w-fit">2019-2020</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-noto font-normal text-justify vs:w-full">
                {Lang ? (
                  <>
                    <p className="indent-2">
                      Welcome to &quot;Hammer King,&quot; a thrilling 2D game
                      developed in Unity! In this game, you play as the mighty
                      Hammer King, smashing your way through three challenging
                      levels while accumulating a high score. This README
                      provides essential information on how to play the game and
                      contribute to its development.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      HammerKing
                      へようこそ、Unityで開発されたスリリングな2Dゲームです！このゲームでは、強力なハンマーキングとしてプレイし、3つの挑戦的なレベルを駆け抜けながら高得点を積み上げます。このREADMEにはゲームのプレイ方法や開発への貢献に関する重要な情報が記載されています。
                    </p>
                  </>
                )}
              </div>
              <div className="flex flex-col justify-center gap-3 font-noto font-normal text-justify py-4 vs:w-full">
                <div className="flex gap-4 items-center">
                  <div className="p-[2px] px-[4px] badgeproj rounded-sm">
                    <p className="icon_color font-bold">
                      {Lang ? "Platform" : "プラットフォーム"}
                    </p>
                  </div>
                  <div className="">
                    <p>Windows</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-[2px] px-[4px] badgeproj rounded-sm min-w-fit">
                    <p className="icon_color font-bold min-w-fit">
                      {Lang ? "Tech Stack" : "テック スタック"}
                    </p>
                  </div>
                  <div className="">
                    <p>C#, Unity 3D, .Net.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center vs:w-full">
                <div className="flex flex-col justify-center gap-2 font-noto font-normal text-justify py-4 vs:w-full lg:w-[75%]">
                  <div className="flex flex-col gap-1 items-center">
                    <div className="p-2 border-[1px] my-2 icon_border">
                      <Image
                        loading="lazy"
                        alt="img"
                        src="projects_indi_img/HammerKing/01.png"
                      />
                    </div>
                    <div className="p-2 border-[1px] my-2 icon_border">
                      <Image
                        loading="lazy"
                        alt="img"
                        src="projects_indi_img/HammerKing/02.png"
                      />
                    </div>
                    <div className="p-2 border-[1px] my-2 icon_border">
                      <Image
                        loading="lazy"
                        alt="img"
                        src="projects_indi_img/HammerKing/03.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end p-1">
                <div
                  className="p-1 px-3 backbutton rounded-sm icon_color font-medium cursor-pointer hover:border-[1px] icon_border"
                  onClick={() => {
                    setWpage("");
                  }}
                >
                  {Lang ? "Back" : "前に戻る"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HammerKing;
