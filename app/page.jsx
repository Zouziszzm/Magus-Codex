"use client";
import React, { useState, useContext } from "react";
import Loader from "@/components/Loader/Loader";
import Mainpg from "@/components/Main/Mainpg";
import BookStore from "@/components/BookStore/BookStore";
import HindiOcr from "@/components/HindiOcr/HindiOcr";
import HammerKing from "@/components/HammerKing/HammerKing";
import Voxel from "@/components/Voxel/Voxel";
import WpageContext from "@/context/WpageContext";
const Page = () => {
  const [Load, setLoad] = useState(false);
  const { Wpage, setWpage } = useContext(WpageContext);

  const renderComponent = () => {
    switch (Wpage) {
      case "BookStore":
        return <BookStore />;
      case "HindiOcr":
        return <HindiOcr />;
      case "HammerKing":
        return <HammerKing />;
      case "Voxel":
        return <Voxel />;
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
