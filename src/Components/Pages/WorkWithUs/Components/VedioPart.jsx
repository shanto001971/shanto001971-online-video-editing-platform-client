import React from "react";
import JobBtn from "./JobBtn";

const VedioPart = () => {
  return (
    <div className="relative overflow-hidden text-center">
      <video
        loop
        autoPlay
        playsInline
        muted
        className="w-full h-full"
        src="https://165225.fs1.hubspotusercontent-na1.net/hubfs/165225/careers-hero-video-no-audio.mp4"
        type="video/mp4"
      ></video>

      <div className=" absolute  top-3 right-1/4  md:top-20  lg:top-1/3 md:right-1/3   text-white  mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl my-0">
          Work With US
        </h1>
        <p className="md:text-xl lg:text-2xl  ">
          Let's inspire the world to create
        </p>

        <div className=" ">
          {" "}
          <JobBtn buttonText="View open jobs"></JobBtn>
        </div>
      </div>
    </div>
  );
};

export default VedioPart;
