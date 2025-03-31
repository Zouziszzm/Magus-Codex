"use client"
import { motion } from "motion/react"
const Name = ({ text, delay = 0.2, duration = 1.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className="text-8xl font-DSEN textCols"
    >
      {text}
    </motion.div>
  );
};

export default Name;

