import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperSection.css'
// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


import slider_1 from '../../../../assets/slider_image/slider_1.webp'
import slider_2 from '../../../../assets/slider_image/slider_2.webp'
import slider_3 from '../../../../assets/slider_image/slider_3.webp'
import slider_4 from '../../../../assets/slider_image/slider_4.webp'
import slider_5 from '../../../../assets/slider_image/slider_5.webp'
import slider_6 from '../../../../assets/slider_image/slider_6.webp'
import Button from '../Button';

const SwiperSection = () => {
    const [swiperRef, setSwiperRef] = useState(null);
   
    

 

    return (
        <div className='bg-white py-10 px-5 md:px-20'>
        <div className='text-center py-20 pt-20'>
            <h2 className='text-[42px] text-black font-bold'>Meet your needs in every context</h2>
            <p className='text-black'>Here are contexts where you can use Motion Mingle to create compelling videos that engage your viewers.</p>
        </div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
             
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='small_devices'>
              <div className=' '>
                <div className='image-container rounded-xl relative overflow-hidden'>
                <img className=' transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={slider_1} alt="" />
                </div>
                </div>
                <div className='text-left'>
                <h2 className='text-2xl text-black text-left mb-1 mt-3 font-bold '>Tiktok Videos</h2>
                <p className='text-[#54545c] leading-5'>Make a video free and easily that is in line with TikTok style to grow your stream.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=''>
              <div className=' image-container'>
                <div className='image-container rounded-xl relative overflow-hidden'>
                <img className=' transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={slider_2} alt="" />
                </div>
                </div>
                <div className='text-left'>
                <h2 className='text-2xl text-black text-left mb-1 mt-3 font-bold '>Facebook Videos</h2>
                <p className='text-[#54545c] leading-5'>Create captivating Facebook clips to attract followers or promote your brand.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=''>
              <div className=' image-container'>
                <div className='image-container rounded-xl relative overflow-hidden'>
                <img className=' transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={slider_3} alt="" />
                </div>
                </div>
                <div className='text-left'>
                <h2 className='text-2xl text-black text-left mb-1 mt-3 font-bold '>Youtube Videos</h2>
                <p className='text-[#54545c] leading-5'>Make stunning videos to get more views on YouTube and attract subscribers.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=''>
              <div className=' image-container'>
                <div className='image-container rounded-xl relative overflow-hidden'>
                <img className=' transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={slider_4} alt="" />
                </div>
                </div>
                <div className='text-left'>
                <h2 className='text-2xl text-black text-left mb-1 mt-3 font-bold '>Instagram Videos</h2>
                <p className='text-[#54545c] leading-5'>Create engaging Instagram clips to boost your profile and attract more leads.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=''>
              <div className=' image-container'>
                <div className='image-container rounded-xl relative overflow-hidden'>
                <img className=' transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={slider_5} alt="" />
                </div>
                </div>
                <div className='text-left'>
                <h2 className='text-2xl text-black text-left mb-1 mt-3 font-bold '>Promo Videos</h2>
                <p className='text-[#54545c] leading-5'>Make compelling promo videos to market and sell your brand or products.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=''>
              <div className=' image-container'>
                <div className='image-container rounded-xl relative overflow-hidden'>
                <img className=' transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={slider_6} alt="" />
                </div>
                </div>
                <div className='text-left'>
                <h2 className='text-2xl text-black text-left mb-1 mt-3 font-bold '>Slideshow Videos</h2>
                <p className='text-[#54545c] leading-5'>Create a video slideshow to share your experiences or market your brand.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

        <div className='text-center pt-16 pb-10'>
          <Button buttonText="Try for free"></Button>
        </div>

        </div>
    )

    
};

export default SwiperSection;