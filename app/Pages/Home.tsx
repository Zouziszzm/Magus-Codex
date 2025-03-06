"use client";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }, // Stagger characters
    },
  };

  const charAnimation = {
    hidden: { scaleY: 1, y: 20, opacity: 0 },
    visible: { scaleY: 1, y: 0, opacity: 1, transition: { ease: [0.2, 1.25, 0.5, 1], duration: 0.6 } },
  };

  const text1 = "アラバルハンガン";
  const text2 = "デジタル職人";

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col w-full h-full justify-center items-center">
        {/* First Text Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-GN text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex space-x-1 Display-Text"
        >
          {text1.split("").map((char, index) => (
            <motion.span key={index} variants={charAnimation} className="inline-block origin-bottom">
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Second Text Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-NJP text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full text-center flex space-x-1 mt-2a justify-center Display-Text"
        >
          {text2.split("").map((char, index) => (
            <motion.span key={index} variants={charAnimation} className="inline-block origin-bottom">
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

