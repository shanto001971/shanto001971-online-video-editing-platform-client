import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { Button, Link, animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <div
        onClick={() => scrollToTop()}
        className="bg-white w-10 h-10 hover:bg-indigo-600  hover:text-white text-white rounded-full fixed right-6 bottom-4 cursor-pointer flex justify-center items-center transition-all z-50"
      >
        <BiArrowToTop className="w-7 h-7 text-indigo-400 hover:text-white " />
      </div>
    )
  );
};

export default BackToTop;
