//import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { feedbackData } from "./FeedbackData";
import { BiSolidQuoteAltLeft } from 'react-icons/bi';


const Feedback = () => {
  //   const [feedbacks, setFeedbacks] = useState("");

  //   useEffect(() => {
  //     fetch(`${import.meta.env.VITE_API_URL}/feedbacks`)
  //       .then((res) => res.json())
  //       .then((data) => setFeedbacks(data));
  //   }, []);

  return (
    <div className="mx-0 sm:mx-6 md:mx-10 lg:mx-32 my-20">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {feedbackData &&
          feedbackData.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="flex flex-col items-center mt-12 lg:mx-24 mb-20">
                <div className="flex gap-4">
                  <img
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
                    src={feedback.img}
                    alt=""
                  />
                </div>
                <p className="text-xs sm:text-xl md:text-2xl text-center pt-4 sm:pt-8 lg:px-0 px-6 sm:px-10">
                  {feedback.feedback}
                </p>
                <div className="text-center">
                <BiSolidQuoteAltLeft className="mt-6 mb-2 sm:mb-4 text-2xl sm:text-4xl text-gray-400 mx-auto"/>
                <h4 className="text-base sm:text-[19px] font-semibold">{feedback.name}</h4>
                <h4 className="text-[12px] sm:text-base font-light text-gray-500">{feedback.designation}</h4>

                <div className="flex justify-center gap-1 mt-2 -mb-6 sm:-mb-4">
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={feedback.rating}
                    readOnly
                  />
                  <p className="text-[15px] text-yellow-500">{feedback.rating}</p>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
