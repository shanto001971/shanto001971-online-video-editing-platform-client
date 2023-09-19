import React from "react";
import JobBtn from "./JobBtn";

const VedioPart = () => {
  return (
    <div className="relative overflow-hidden min-w-full min-h-full">
      <video
        loop
        autoPlay
        playsInline
        muted
        className="min-w-[100%] max-w-[2520px]"
        src="https://165225.fs1.hubspotusercontent-na1.net/hubfs/165225/careers-hero-video-no-audio.mp4"
        type="video/mp4"
      ></video>

      <div className=" absolute top-2 right-14 md:top-20  lg:top-1/3 md:right-1/3   text-white  mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl ml-7 lg:ml-0 font-serif">
        Work With US
        </h1>
        <p className="lg:text-xl md:ml-8  my-1">
          Let's inspire the world to create
        </p>

        <div className="ml-8 md:ml-14 lg:ml-20  ">
          {" "}
          <JobBtn buttonText="View open jobs"></JobBtn>
        </div>
      </div>
    </div>
  );
};

export default VedioPart;
