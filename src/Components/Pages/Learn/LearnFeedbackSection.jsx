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
    <div className="lg:flex items-center">
      <div className="flex-col md:w-[450px] space-y-4">
        <BiSolidQuoteAltLeft className="text-6xl text-blue-600 mx-auto" />
        <h2 className="text-4xl font-semibold mx-auto">
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
                <div className="py-6">
                    <h6 className="italic">{item.feedback}</h6>
                    <h4 className="text-xl font-semibold mt-4 ">{item.name} - {item.designation}</h4>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LearnFeedbackSection;
