//import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { feedbackData } from "./FeedbackData";


const Feedback = () => {
//   const [feedbacks, setFeedbacks] = useState("");

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/feedbacks`)
//       .then((res) => res.json())
//       .then((data) => setFeedbacks(data));
//   }, []);


  return (
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {feedbackData &&
            feedbackData.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div className="flex flex-col items-center mt-12 lg:mx-24 mb-20">
                  <div className="flex gap-4">
                  <img className="w-24 h-24 rounded-full" src={feedback.img} alt="" />
                  </div>
                  <p className="text-lg font-semibold pt-8 pb-4">{feedback.feedback}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold">{feedback.name}</h4>
                  <h4 className=" text-gray-600">{feedback.designation}</h4>
                  <div className="flex justify-center gap-1">
                  <Rating
                  style={{ maxWidth: 60 }}
                  value={feedback.rating}
                  readOnly
                />
                <p className="text-sm text-yellow-500">{feedback.rating}</p>
                  </div>
                  </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </>
  );
};

export default Feedback;