import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
import LanguageContext from "@/context/LanguageContext.js";
import WpageContext from "@/context/WpageContext.js";
import Link from "next/link";
import { FaAngleRight } from "../Icons/Icons.js";
import Image from "next/image.js";

const Voxel = () => {
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
                  {Lang ? "Voxel" : "Voxel"}
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
                    {Lang ? "Voxel" : "Voxel"}
                  </p>
                </div>
                <div className="p-[2px] px-[4px] badgecolor rounded-sm">
                  <p className="icon_color font-bold min-w-fit">2021-2022</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-noto font-normal text-justify vs:w-full">
                {Lang ? (
                  <>
                    <p className="indent-2">
                      MagicaVoxel is a popular voxel-based 3D modeling software
                      that allows you to create 3D pixel art scenes and objects.
                      It's a powerful tool for designing simple and charming 3D
                      worlds, and it's often used for game development, art
                      projects, and animations. I recently had the pleasure of
                      creating a charming Japanese-style hut and room using
                      MagicaVoxel. It was an enjoyable project that allowed me
                      to capture the serene and traditional atmosphere of a
                      Japanese dwelling.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      MagicaVoxelは人気のあるボクセルベースの3Dモデリングソフトウェアで、3Dピクセルアートのシーンやオブジェクトを作成できます。これはシンプルで魅力的な3Dワールドをデザインするための強力なツールであり、ゲーム開発、アートプロジェクト、アニメーションによく使用されています。最近、MagicaVoxelを使用して魅力的な日本風の小屋と部屋を作成する喜びを味わいました。これは静謐で伝統的な日本の住まいの雰囲気を捉える楽しいプロジェクトでした。
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
                    <p>Windows,linux,MacOS</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-[2px] px-[4px] badgeproj rounded-sm min-w-fit">
                    <p className="icon_color font-bold min-w-fit">
                      {Lang ? "Tech Stack" : "テック スタック"}
                    </p>
                  </div>
                  <div className="">
                    <p>Magica Voxel, (Blender for Shader Highlight)</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center vs:w-full">
                <div className="flex flex-col justify-center gap-2 font-noto font-normal text-justify py-4 vs:w-full lg:w-[75%]">
                  <div className="flex flex-col gap-1 items-center">
                    <div className="p-2 border-[1px] my-2 icon_border">
                      <Image
                        loading="lazy"
                        src="projects_indi_img/Voxel/01.png"
                      />
                    </div>
                    <div className="p-2 border-[1px] my-2 icon_border">
                      <Image
                        loading="lazy"
                        src="projects_indi_img/Voxel/02.png"
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

export default Voxel;
