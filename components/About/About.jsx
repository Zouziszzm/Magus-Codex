import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
import LanguageContext from "@/context/LanguageContext.js";
import Link from "next/link";
const About = () => {
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
  });

  return (
    <>
      <motion.div
        animate={controls}
        variants={animationVariants}
        className="relative"
      >
        <div className="flex justify-center h-full items-center">
          <div className="flex p-4 py-8 h-fit flex-wrap vs:w-full md:w-[85%]">
            <div className="flex justify-center gap-4 flex-col p-4  icon_color vs:order-2 vs:w-full lg:order-1 lg:w-2/3">
              <div className="w-fit">
                <p className="font-noto font-bold text-3xl">
                  {Lang ? "Bio" : "バイオ"}
                </p>
                <p className="w-full h-[3px] bgcoloediv"></p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-noto font-normal text-justify vs:w-full lg:w-[75%]">
                {Lang ? (
                  <>
                    <p>
                      I am a versatile digital creator based in Karnataka,
                      India, deeply immersed in
                      <i className="font-medium"> frontend development</i> and
                      freelancing as a
                      <i className="font-medium"> backend developer</i>. With a
                      rich background in technology, I infuse creativity
                      seamlessly into diverse projects, crafting intuitive
                      designs to empower businesses in the digital landscape.
                    </p>
                    <p>
                      My journey involves mastering frontend intricacies, diving
                      into backend architecture, and seamlessly blending
                      creativity with technology. Beyond the code realm, gaming
                      provides a refreshing escape from deadlines and office
                      pressures. Join me in this dynamic narrative, where each
                      line of
                      <Link href="" className="linkcolor">
                        <span className="underline underline-offset-[3px] mx-[4px]">
                          code
                        </span>
                      </Link>
                      and gaming moment actively contributes to my digital
                      exploration.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      私は、インドのカルナータカ州に拠点を置く多才なデジタルクリエイターです。主に
                      <i className="font-bold">フロントエンド開発</i>
                      に没頭し、
                      <i className="font-bold">バックエンド開発者</i>
                      としてもフリーランスとして活動しています。技術に豊富なバックグラウンドを持ち、創造性を多様なプロジェクトにシームレスに組み込み、直感的なデザインを作り出して企業がデジタルの世界で力強くなるお手伝いをしています。
                    </p>
                    <p>
                      私の旅には、フロントエンドの微妙な部分のマスタリング、バックエンドアーキテクチャへの深い探求、クリエイティビティと技術をシームレスに融合させるといった要素が含まれています。コードの領域を超えて、ゲームは締め切りとオフィスのプレッシャーからの爽快な逃避を提供します。このダイナミックな物語に参加し、各行の
                      <Link href="" className="linkcolor">
                        <span className="underline underline-offset-[3px] mx-[4px]">
                          コード
                        </span>
                      </Link>
                      と
                      <Link href="" className="linkcolor">
                        <span className="underline underline-offset-[3px] mx-[4px]">
                          ゲーム
                        </span>
                      </Link>
                      の瞬間が私のデジタル探求に積極的に貢献しているのをご一緒に体験してください。
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex p-4 justify-center items-center vs:order-1 vs:w-full lg:order-2 lg:w-1/3">
              <div className="p-2 border-[1px] my-2 icon_border">
                <img
                  alt="img"
                  width="200"
                  height="200"
                  className="rounded-md min-w-[200px] min-h-[200px]"
                  src="/pfp/unnamed.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
