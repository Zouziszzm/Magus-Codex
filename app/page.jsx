"use client";
import React, { useState, useContext } from "react";
import Loader from "@/components/Loader/Loader";
import Mainpg from "@/components/Main/Mainpg";
import BookStore from "@/components/BookStore/BookStore";
import HindiOcr from "@/components/HindiOcr/HindiOcr";
import HammerKing from "@/components/HammerKing/HammerKing";
import Voxel from "@/components/Voxel/Voxel";
import WpageContext from "@/context/WpageContext";
import Nav from "@/components/Nav/Nav";
import CopyRight from "@/components/CopyRight/CopyRight";
const Page = () => {
  const [Load, setLoad] = useState(false);
  const { Wpage, setWpage } = useContext(WpageContext);

  const renderComponent = () => {
    switch (Wpage) {
      case "BookStore":
        return (
          <div className="relative">
            <Nav className="z-10 fixed w-full backdrop-blur-[7px]" />
            <BookStore />
            <CopyRight />
          </div>
        );
      case "HindiOcr":
        return (
          <div className="relative">
            <Nav className="z-10 fixed w-full backdrop-blur-[10px]" />
            <HindiOcr />
            <CopyRight />
          </div>
        );
      case "HammerKing":
        return (
          <div className="relative">
            <Nav className="z-10 fixed w-full backdrop-blur-[10px]" />
            <HammerKing />
            <CopyRight />
          </div>
        );
      case "Voxel":
        return (
          <div className="relative">
            <Nav className="z-10 fixed w-full backdrop-blur-[10px]" />
            <Voxel />
            <CopyRight />
          </div>
        );
      default:
        return <Mainpg />;
    }
  };

  return (
    <>
      <div className="relative">
        {Load ? (
          <>{renderComponent()}</>
        ) : (
          <>
            <Loader redirect={() => setLoad(true)} />
          </>
        )}
      </div>
    </>
  );
};

export default Page;
