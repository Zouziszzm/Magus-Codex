"use client";
import React, { useState, useEffect } from "react";
import AnimateContext from "./AnimateContext";
import { motion, useAnimationControls } from "framer-motion";

const Animatecontext = ({ children }) => {
  const controls = useAnimationControls();

  const animationVariants = {
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9, ease: "easeIn" },
    },
    initial: {
      opacity: 0,
      x: 0,
      y: -20,
    },
  };

  return (
    <AnimateContext.Provider value={{ controls, animationVariants }}>
      {children}
    </AnimateContext.Provider>
  );
};

export default Animatecontext;
