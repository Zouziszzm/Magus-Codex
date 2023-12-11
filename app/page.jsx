"use client";
import { useState } from "react";
import Home from "@/components/Home/Home";
import Loader from "@/components/Loader/Loader";
import About from "@/components/About/About";
import Nav from "@/components/Nav/Nav";
const Page = () => {
  const [Load, setLoad] = useState(false);

  return (
    <>
      <div className="">
        {Load ? (
          <>
            <Nav className="z-10 fixed w-full backdrop-blur-[10px]" />
            <Home />
            <About />
          </>
        ) : (
          <>
            <Loader redirect={setLoad} />
          </>
        )}
      </div>
    </>
  );
};

export default Page;
