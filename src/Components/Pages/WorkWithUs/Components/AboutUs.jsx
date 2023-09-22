import React from "react";
import img1 from "../../../../assets/Work_img/img_1.webp";
import img2 from "../../../../assets/Work_img/img_2.webp";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const AboutUs = () => {
  const {
    theme,
    changesThemeTextColor
  } = useTheme(); //for dark amd light mode themes

  const viewJobs = () => {
    window.open(
      "https://jobs.careers.microsoft.com/global/en/search?q=clipchamp",
      "_blank"
    );
  };
  return (
    <>
      <div className="w-full  ">
        <div data-aos="fade-up"
     data-aos-duration="1000" 
     className=" my-3 md:my-10 lg:my-20 shadow-md  rounded-lg md:flex items-center justify-center gap-12  max-h[285px] mx-2 lg:mx-16">
          <div className=" ">
            <img
              src={img1}
              alt=""
              className="object-fill rounded-md w-full md:w-[505px] lg:w-[600px]"
            />
          </div>
          <div className="mx-4 md:mx-0 w-full md:w-[505px] lg:w-[600px]">
            <p className="text-3xl font-bold md:w-4/6">Who we are </p>
            <p className={`text-lg font-medium py-2 md:py-5 ${theme.mode === 'dark' ? 'text-gray-100' : 'text-black'}`}>
              MotionMingle is the online video editor that empowers anyone to
              tell stories worth sharing. We're used by millions of everyday
              editors worldwide. Our team innovates every day by developing
              exciting new tools, features and support systems for our users.
            </p>
            <button
              onClick={viewJobs}
              className="btn rounded-full text-white bg-violet-500 hover:bg-violet-600 group"
            >
              <p className="text-sm md:text-base">View open jobs</p>
            </button>{" "}
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="1000" className="my-7 md:my-10 lg:my-20 shadow-md  rounded-lg md:flex flex-row-reverse items-center justify-center gap-9 max-h[285px] mx-2 lg:mx-20">
          <div className=" ">
            <video
              loop
              autoPlay
              playsInline
              muted
              className=" rounded-md  w-full md:w-[505px] lg:w-[600px] "
              src="//videos.ctfassets.net/b4k16c7lw5ut/5OwShFGWt1HZJ2rCV3HDUL/9589889ccda34464c955cd99487ca22d/CC_Brand_Value_Slides_v7_optim.mp4"
              type="video/mp4"
            ></video>
          </div>
          <div className="mx-4 md:mx-0 w-full md:w-[505px] lg:w-[600px]">
            <p className="text-3xl font-bold md:w-4/6">Our company values </p>
            <p className={`text-lg font-medium py-2 md:py-5 ${theme.mode === 'dark' ? 'text-gray-100' : 'text-black'}`}>
              Words to work by. Our company values sit at the core of what
              MotionMingle is as a company. We aim to produce innovative
              products, be an inspiring industry leader and facilitate a
              workplace people genuinely love.
            </p>
            <button
              onClick={viewJobs}
              className="btn rounded-full text-white bg-violet-500 hover:bg-violet-600 group"
            >
              <p className="text-sm md:text-base">View open jobs</p>
            </button>{" "}
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="1000" className="my-3 md:my-10 lg:my-20 shadow-md  rounded-lg md:flex items-center justify-center gap-9 max-h[285px]  mx-2 lg:mx-20">
          <div className=" ">
            <img
              src={img2}
              alt=""
              className="object-fill rounded-md w-full md:w-[505px] lg:w-[600px]"
            />
          </div>
          <div className="mx-4 md:mx-0 w-full md:w-[505px] lg:w-[600px]">
            <p className="text-3xl font-bold md:w-4/6">Who you can do </p>
            <p className={`text-lg font-medium py-2 md:py-5 ${theme.mode === 'dark' ? 'text-gray-100' : 'text-black'}`}>
              MotionMingle is the online video editor that empowers anyone to
              tell stories worth sharing. We're used by millions of everyday
              editors worldwide. Our team innovates every day by developing
              exciting new tools, features and support systems for our users.
            </p>
            <button
              onClick={viewJobs}
              className="btn rounded-full text-white bg-violet-500 hover:bg-violet-600 group"
            >
              <p className="text-sm md:text-base">View open jobs</p>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
