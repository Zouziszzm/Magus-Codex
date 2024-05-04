import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
import LanguageContext from "@/context/LanguageContext.js";
import WpageContext from "@/context/WpageContext";
import Link from "next/link";
import img from "next/image";
const Projects = () => {
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
        <div className="flex flex-col items-center h-full items-center">
          <div className="flex py-[7%] p h-fit flex-wrap vs:w-full md:w-[60%]">
            <div className="flex justify-center gap-4 flex-col p-4  icon_color w-full">
              <div className="w-full flex justify-center">
                <blockquote className="font-mono font-bold italic p-2 vs:text-3xl md:text-4xl">
                  <p className="drop-shadow-sm text-center">
                    {Lang ? (
                      <>&quot;Quality craftsmanship, made with heart&quot;</>
                    ) : (
                      <>&quot;匠の心、技のこころ&quot;</>
                    )}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="flex px-4 p h-fit flex-wrap vs:w-full md:w-[60%]">
            <div className="flex justify-center gap-4 flex-col p-4  icon_color w-full">
              <div className="w-fit">
                <p className="font-noto font-bold text-3xl">
                  {Lang ? "Projects" : "プロジェクト"}
                </p>
                <p className="w-full h-[3px] bgcoloediv"></p>
              </div>
            </div>
          </div>
          <div className="flex p-4 py-4 h-fit flex-wrap justify-center vs:w-full md:w-[85%]">
            <div className="flex w-[80%] flex-wrap">
              <div className="flex justify-center gap-4 flex-col p-4  icon_color vs:w-full lg:w-1/2">
                <div
                  className="flex flex-col justify-center items-center gap-3 font-not_sans font-normal text-justify w-full cursor-pointer"
                  onClick={() => {
                    setWpage("BookStore");
                  }}
                >
                  <div className="p-2 min-w-full border-[1px] icon_border">
                    <img
                      loading="lazy"
                      alt="img"
                      className="rounded-sm grayscale hover:grayscale-0"
                      src="projectsthumb/Bookstore.png"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full justify-center items-center font-noto font-medium">
                    <div className="w-fit">{Lang ? "BookStore" : "書店"}</div>
                    <div className="vs:w-full vs:text-justify lg:w-[85%] lg:text-center">
                      {Lang
                        ? "A backend project to understand the working of the backend and integration of the backend to frontend."
                        : "バックエンドの機能とバックエンドとフロントエンドの統合の理解を深めるためのバックエンドプロジェクト"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 flex-col p-4  icon_color vs:w-full lg:w-1/2">
                <div
                  className="flex flex-col justify-center items-center gap-3 font-not_sans font-normal text-justify w-full cursor-pointer"
                  onClick={() => {
                    setWpage("HindiOcr");
                  }}
                >
                  <div className="p-2 min-w-full border-[1px] icon_border">
                    <img
                      loading="lazy"
                      alt="img"
                      className="rounded-sm grayscale hover:grayscale-0"
                      src="projectsthumb/Hindiocr.png"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full justify-center items-center font-noto font-medium">
                    <div className="w-fit">
                      {Lang ? "Hindi OCR" : "ヒンディーOCR"}
                    </div>
                    <div className=" vs:w-full vs:text-justify lg:w-[85%] lg:text-center">
                      {Lang
                        ? "Hindi inscription can be extrated from the image and output translated to english."
                        : "ヒンディーの刻銘は画像から抽出され、得られたテキストは自動的に英語に翻訳されます。"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[80%] flex-wrap">
              <div className="flex justify-center gap-4 flex-col p-4  icon_color vs:w-full lg:w-1/2">
                <div
                  className="flex flex-col justify-center items-center gap-3 font-not_sans font-normal text-justify w-full cursor-pointer"
                  onClick={() => {
                    setWpage("HammerKing");
                  }}
                >
                  <div className="p-2 min-w-full border-[1px] icon_border">
                    <img
                      loading="lazy"
                      alt="img"
                      className="rounded-sm grayscale hover:grayscale-0"
                      src="projectsthumb/Game.png"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full justify-center items-center font-noto font-medium">
                    <div className="w-fit">
                      {Lang ? "Hammer King" : "ハンマーキング"}
                    </div>
                    <div className=" vs:w-full vs:text-justify lg:w-[85%] lg:text-center">
                      {Lang
                        ? "A thrilling 2D game developed in Unity! In this game, you play as the mighty Hammer King, smashing your way through."
                        : "Unityで開発されたスリリングな2Dゲーム！このゲームでは、あなたは強力なハンマーキングとして、突き進んでいく遊び方です。"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 flex-col p-4  icon_color vs:w-full lg:w-1/2">
                <div
                  className="flex flex-col justify-center items-center gap-3 font-not_sans font-normal text-justify w-full cursor-pointer"
                  onClick={() => {
                    setWpage("Voxel");
                  }}
                >
                  <div className="p-2 min-w-full border-[1px] icon_border">
                    <img
                      loading="lazy"
                      alt="img"
                      className="rounded-sm grayscale hover:grayscale-0"
                      src="projectsthumb/Voxel.png"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full justify-center items-center font-noto font-medium">
                    <div className="w-fit">
                      {Lang ? "Voxel Art" : "ボクセルアート"}
                    </div>
                    <div className=" vs:w-full vs:text-justify lg:w-[85%] lg:text-center">
                      {Lang
                        ? "Creating the Japanese-style Hut: For the charming Japanese-style hut, I designed the hut's structure with voxels."
                        : "日本風の小屋の制作：魅力的な日本風の小屋では、ボクセルを使って小屋の構造をデザインしました。"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
