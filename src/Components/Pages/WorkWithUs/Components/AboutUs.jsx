import React from "react";
import img1 from "../../../../assets/Work_img/img_1.webp";
import img2 from "../../../../assets/Work_img/img_2.webp";

const AboutUs = () => {
  
  return (
    <>
      <div className="  w-full  ">
        <div
            
              className=" my-3 md:my-10 lg:my-20 shadow-md  rounded-lg md:flex items-center justify-center gap-12  max-h[285px] mx-2 lg:mx-16"
            >
              <div className=" ">
              
                  <img
                    src={img1}
                    alt=""
                    className="object-fill rounded-md w-[350px] md:w-[505px] lg:w-[600px]"
                  />
               
              </div>
              <div className="mx-4 md:mx-0 w-[350px] md:w-[505px] lg:w-[600px]">
                <p className="text-3xl font-bold md:w-4/6">Who we are  </p>
                <p className="text-xl font-medium text-slate-800 py-2 md:py-5">
                  MotionMingle  is the online video editor that empowers anyone to tell stories worth sharing. We're used by millions of everyday editors worldwide. Our team innovates every day by developing exciting new tools, features and support systems for our users.
                </p>
                <button className="btn rounded-full text-white bg-violet-500 hover:bg-violet-600 group">
                  <p className="text-sm md:text-base">View open jobs</p>
                </button>{" "}
              </div>
            </div>
        <div
            
              className="my-3 md:my-10 lg:my-20 shadow-md  rounded-lg md:flex flex-row-reverse items-center justify-center gap-9 max-h[285px] mx-2 lg:mx-20"
            >
              <div className=" ">
              <video
loop
autoPlay
playsInline
muted
className=" rounded-md  w-[350px] md:w-[505px] lg:w-[600px] "
src='//videos.ctfassets.net/b4k16c7lw5ut/5OwShFGWt1HZJ2rCV3HDUL/9589889ccda34464c955cd99487ca22d/CC_Brand_Value_Slides_v7_optim.mp4'
type="video/mp4"
></video>
               
              </div>
              <div className="mx-4 md:mx-0 w-[350px] md:w-[505px] lg:w-[600px]">
                <p className="text-3xl font-bold md:w-4/6">Our company values </p>
                <p className="text-xl font-medium text-slate-800 py-2 md:py-5">
                Words to work by. Our company values sit at the core of what MotionMingle is as a company.  We aim to produce innovative products, be an inspiring industry leader and facilitate a workplace people genuinely love.
                </p>
                <button className="btn rounded-full text-white bg-violet-500 hover:bg-violet-600 group">
                  <p className="text-sm md:text-base">View open jobs</p>
                </button>{" "}
              </div>
            </div>
            <div
            
            className="my-3 md:my-10 lg:my-20 shadow-md  rounded-lg md:flex items-center justify-center gap-9 max-h[285px]  mx-2 lg:mx-20"
          >
            <div className=" ">
            
                <img
                  src={img2}
                  alt=""
                  className="object-fill rounded-md w-[350px] md:w-[505px] lg:w-[600px]"
                />
             
            </div>
            <div className="mx-4 md:mx-0 w-[350px] md:w-[505px] lg:w-[600px]">
              <p className="text-3xl font-bold md:w-4/6">Who you can do </p>
              <p className="text-xl font-medium text-slate-800 py-2 md:py-5">
                MotionMingle  is the online video editor that empowers anyone to tell stories worth sharing. We're used by millions of everyday editors worldwide. Our team innovates every day by developing exciting new tools, features and support systems for our users.
              </p>
              <button className="btn rounded-full text-white bg-violet-500 hover:bg-violet-600 group">
                <p className="text-sm md:text-base">View open jobs</p>
              </button>{" "}
            </div>
          </div>
        </div>
    </>
  );
};

export default AboutUs;

