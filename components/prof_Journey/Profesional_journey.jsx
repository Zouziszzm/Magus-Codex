import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
import LanguageContext from "@/context/LanguageContext.js";
import Link from "next/link";
const Profesional_journey = () => {
  const { Lang, setLang, toggleLang } = useContext(LanguageContext);
  const { controls, animationVariants } = useContext(AnimateContext);

  const handelLang = () => {
    toggleLang();
    controls.set("initial");
    controls.start("animate");
  };

  useEffect(() => {
    controls.set("initial");
    controls.start("animate");
  }, []);

  return (
    <>
      <motion.div
        animate={controls}
        variants={animationVariants}
        className="relative"
      >
        <div className="flex justify-center h-full items-center">
          <div className="flex p-4 py-8 h-fit flex-wrap vs:w-full md:w-[85%]">
            <div className="flex justify-center gap-4 flex-col p-4  icon_color vs:w-full">
              <div className="w-fit">
                <p className="font-noto font-bold text-3xl">
                  {Lang ? "Career" : "キャリア"}
                </p>
                <p className="w-full h-[3px] bgcoloediv"></p>
              </div>
              <div className="flex flex-col gap-2 text-justify vs:w-full">
                <div className="flex gap-2 font-noto font-medium">
                  <p className="min-w-fit">2022-2023</p>
                  <div className="flex flex-col flex-wrap font-normal">
                    {Lang ? (
                      <p>Worked as a Frontend Developer at ItBigBang.</p>
                    ) : (
                      <p>
                        ItBigBang でフロントエンドデベロッパーとして働きました。
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 font-noto font-medium">
                  <p className="min-w-fit">2022-2023</p>
                  <div className="flex flex-col flex-wrap font-normal vs:w-full lg:w-[35%]">
                    {Lang ? (
                      <p>
                        Completed the Master's program at KLS Gogte Institute of
                        Technology in Belgaum, Karnataka
                      </p>
                    ) : (
                      <p>
                        KLSゴグテ工科大学で修士課程を修了しました。所在地は、カルナータカ州ベルガウムです。
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 font-noto font-medium">
                  <p className="min-w-fit pr-12">2000</p>
                  <div className="flex flex-col flex-wrap font-normal vs:w-full lg:w-[35%]">
                    {Lang ? (
                      <p>Born in Karnataka, India.</p>
                    ) : (
                      <p>カルナータカ、インドで生まれました。</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full items-center">
          <div className="flex p-4 py-8 h-fit flex-wrap vs:w-full md:w-[85%]">
            <div className="flex justify-center gap-4 flex-col p-4  icon_color vs:w-full">
              <div className="w-fit">
                <p className="font-noto font-bold text-3xl">
                  {Lang ? "Pursuits" : "追求"}
                </p>
                <p className="w-full h-[3px] bgcoloediv"></p>
              </div>
              <div className="flex flex-col gap-2 text-justify vs:w-full">
                <div className="flex gap-2 font-noto">
                  <div className="flex flex-col flex-wrap">
                    {Lang ? (
                      <p>
                        Voxel Art, Playing Video Games, OpenGl, Photography,
                        SonyCam.
                      </p>
                    ) : (
                      <p>
                        ボクセルアート、ビデオゲームプレイ、OpenGL、写真撮影、SonyCam。
                      </p>
                    )}
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

export default Profesional_journey;
