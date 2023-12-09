"use client";
import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const Themecontext = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const setDark = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document.querySelector("body").classList.add("bgcolor");
  };

  const setLight = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      setDark();
    } else {
      setLight();
    }
  };

  useEffect(() => {
    if (isDark) {
      setDark();
    } else {
      setLight();
    }
  }, [isDark]);

  return (
    <>
      <ThemeContext.Provider value={{ isDark, setIsDark, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
export default Themecontext;
