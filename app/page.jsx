"use client";
import { useState } from "react";
import Home from "@/components/Home/Home";
import Loader from "@/components/Loader/Loader";
const Page = () => {
  const [Load, setLoad] = useState(false);

  return (
    <>
      {Load ? (
        <>
          <Home redirect={setLoad} />
        </>
      ) : (
        <>
          <Loader redirect={setLoad} />
        </>
      )}
    </>
  );
};

export default Page;
