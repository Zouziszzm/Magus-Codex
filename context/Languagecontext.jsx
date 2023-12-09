"use client";
import React, { useState, useEffect } from "react";
import LanguageContext from "./LanguageContext";

const Languagecontext = ({ children }) => {
  const [Lang, setLang] = useState(true);

  const toggleLang = () => {
    setLang(!Lang);
  };
  return (
    <>
      <LanguageContext.Provider value={{ Lang, setLang, toggleLang }}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};
export default Languagecontext;
