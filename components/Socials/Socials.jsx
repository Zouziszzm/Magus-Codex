import { useContext, useEffect } from "react";
import AnimateContext from "@/context/AnimateContext.js";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHashnode,
} from "react-icons/fa6";
import LanguageContext from "@/context/LanguageContext.js";
import WpageContext from "@/context/WpageContext";
import Link from "next/link";
import img from "next/image";
const Socials = () => {
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
          <div className="flex px-4 p h-fit flex-wrap vs:w-full md:w-[60%]">
            <div className="flex justify-center gap-4 flex-col p-4  icon_color w-full">
              <div className="w-fit">
                <p className="font-noto font-bold text-3xl">
                  {Lang ? "Socials" : "ソーシャルメディア"}
                </p>
                <p className="w-full h-[3px] bgcoloediv"></p>
              </div>
            </div>
          </div>
          <div className="flex p-4 py-4 h-fit justify-center vs:w-full md:w-[85%]">
            <div className="flex flex-col gap-2 justify-center w-[85%]">
              <Link href="https://www.github.com/Zouziszzm" target="_blank">
                <div className="p-2 px-4 flex items-center gap-2 w-fit icon_color badgecolor rounded-md hover:bg-gray-500">
                  <FaGithub />
                  @Zouziszzm
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/al-farhaan-khan-inamdar/"
                target="_blank"
              >
                <div className="p-2 px-4 flex items-center gap-2 w-fit icon_color badgecolor rounded-md hover:bg-gray-500">
                  <FaLinkedin />
                  AlfarhaanKhan I
                </div>
              </Link>

              <Link href="https://www.twitter.com/Zouziszzm" target="_blank">
                <div className="p-2 px-4 flex items-center gap-2 w-fit icon_color badgecolor rounded-md hover:bg-gray-500">
                  <FaTwitter />
                  @Zouziszzm
                </div>
              </Link>
              <Link href="https://www.instagram.com/mzzsiz" target="_blank">
                <div className="p-2 px-4 flex items-center gap-2 w-fit icon_color badgecolor rounded-md hover:bg-gray-500">
                  <FaInstagram />
                  @mzzsiz
                </div>
              </Link>
              <Link href="https://hashnode.com/@Zouziszzm" target="_blank">
                <div className="p-2 px-4 flex items-center gap-2 w-fit icon_color badgecolor rounded-md hover:bg-gray-500">
                  <FaHashnode />
                  @Zouziszzm
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Socials;
