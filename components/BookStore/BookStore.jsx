import React, { useContext } from "react";
import WpageContext from "@/context/WpageContext";
const BookStore = () => {
  const { Wpage, setWpage } = useContext(WpageContext);
  return (
    <>
      <div>BookStore</div>
      <div
        onClick={() => {
          setWpage("");
        }}
      >
        back
      </div>
    </>
  );
};

export default BookStore;
