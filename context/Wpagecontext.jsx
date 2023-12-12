"use client";
import React, { useState, useEffect } from "react";
import WpageContext from "./WpageContext";

const Wpagecontext = ({ children }) => {
  const [Wpage, setWpage] = useState("Mainpg");
  return (
    <>
      <WpageContext.Provider value={{ Wpage, setWpage }}>
        {children}
      </WpageContext.Provider>
    </>
  );
};
export default Wpagecontext;
