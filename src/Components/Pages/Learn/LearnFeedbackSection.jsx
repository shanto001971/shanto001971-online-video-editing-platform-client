import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay } from "swiper/modules";

import { feedbackData } from "./LearnEducationalVideo/LearnEducationData";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const LearnFeedbackSection = () => {
  return (
    <div className="my-20 md:my-32 lg:flex items-center">
      <div className="text-center lg:text-start lg:mb-0 mb-10 flex-col lg:w-[450px] space-y-4">
        <BiSolidQuoteAltLeft className="text-5xl md:text-6xl text-blue-600 mx-auto" />
        <h2 className="text-2xl md:text-4xl font-semibold mx-auto leading-10">
          What they say about Mingle Motion
        </h2>
      </div>
      <div className="lg:w-[650px]">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {feedbackData &&
            feedbackData.length > 0 &&
            feedbackData.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="pb-3 md:py-6">
                    <h6 className="text-center text-sm md:text-base lg:text-start italic">{item.feedback}</h6>
                    <h4 className="text-center lg:text-start text-base md:text-xl font-semibold mt-4 ">{item.name} - {item.designation}</h4>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LearnFeedbackSection;
