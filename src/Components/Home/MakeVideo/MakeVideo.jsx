import React from "react";
import play from "../../../assets/extra-img/play.svg";
import circle from "../../../assets/extra-img/circle.svg";
import makevideo from "../../../assets/extra-img/makeVideoImg.webp";
import { FaArrowRight } from "react-icons/fa";

import "./MakeVideo.css";
import { Link } from "react-router-dom";
import JobBtn from "../../Pages/WorkWithUs/Components/JobBtn";

const MakeVideo = () => {
  const gradientStyle = {
    background:
      "linear-gradient(135deg, rgb(255,206,236) 0%, rgb(152,150,240) 100%)",
  };
  return (
    <div>
      <div
        className='bg-[url("https://biteable.com/wp-content/uploads/2023/04/Gradient-Quote-2-Radial-Mobile.png")]  lg:h-[450px] lg:w-[1250px] lg:ml-14 mb-9 rounded-3xl  bg-cover bg-center'
        style={gradientStyle}
      >
        <img
          src={circle}
          alt=""
          className="lg:pt-4 lg:animate-scale animate-pulse animate-ease-in-out infinite"
        />
        <div className="md:flex gap-7 justify-center items-center pr-16 pb-9 ">
        <div>
          <img src={makevideo} alt="" />
        </div>
        <div className="pl-4">
          <p className="text-3xl lg:text-4xl font-bold ">Make a Video for Free with <br /> MotionMingle Now</p>
          <div>
<Link to='/dashboard'> <button  className='text-white btn glass font-bold mt-2 max-h-8  hover:text-indigo-700 transition duration-100 hover:duration-500 px-2' >
           Get Started<FaArrowRight />
            </button> </Link>         </div>
        </div>
        </div>
        
        <img
          src={play}
          alt=""
          className="hidden md:block animate-timing-6 animate-pulse absolute  md:bottom-96 right-2 lg:right-9"
        />
      </div>
    </div>
  );
};

export default MakeVideo;
