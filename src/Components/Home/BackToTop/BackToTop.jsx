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
      <button onClick={()=>scrollToTop()} className="bg-slate-800 w-12 h-12 hover:bg-slate-700 text-white rounded-full fixed right-14 bottom-48 cursor-pointer flex justify-center items-center transition-all z-50">
        <BiArrowToTop className="w-7 h-7 " />
      </button>
    ) 
  );
};

export default BackToTop;
