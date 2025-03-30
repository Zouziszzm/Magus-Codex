"use client"
import { motion } from "motion/react"
import { useState } from "react";
const Name = ({ text }: { text: string }) => {
  const letters = text.split("");

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <motion.div className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="textCol text-8xl font-DSEN leading-none"
            initial={{ opacity: 0, y: 20, scaleY: 0 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Name;

