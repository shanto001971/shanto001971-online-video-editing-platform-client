import topic_1 from '../../../../assets/topics_image/topic_1.webp'
import topic_2 from '../../../../assets/topics_image/topic_2.webp'
import topic_3 from '../../../../assets/topics_image/topic_3.webp'
const Topics = () => {
    return (
        <div className="bg-white px-5 md:px-20 py-20">
           <h2 className="text-center text-black text-[42px] font-bold">More topics on CapCut online video editor</h2>
           {/* flex container */}
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>

            <div>
                <div className='w-[342px] h-[228px] rounded-xl relative overflow-hidden  '>
                    <img className='w-full h-full transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={topic_1} alt="" />
                </div>
                <div className='py-4'>
                    <h3 className='text-[22px] text-black font-semibold'>How To Go Viral on TikTok?</h3>
                    <p className='text-[#6F6F76] py-2'>There are actionable steps you can take to turn this luck into predictable and highly effective ways to go viral on TikTok.</p>
                </div>
            </div>

            <div>
                <div className='w-[342px] h-[228px] rounded-xl relative overflow-hidden  '>
                    <img className='w-full h-full transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={topic_2} alt="" />
                </div>
                <div className='py-4'>
                    <h3 className='text-[22px] text-black font-semibold'>How to Make a YouTube Video?</h3>
                    <p className='text-[#6F6F76] py-2'>Make a high-impact YouTube video that will reel in your target audience and get them hooked onto your content!</p>
                </div>
            </div>

            <div>
                <div className='w-[342px] h-[228px] rounded-xl relative overflow-hidden  '>
                    <img className='w-full h-full transition-transform transform scale-100 hover:scale-110 absolute inset-0  duration-300' src={topic_3} alt="" />
                </div>
                <div className='py-4'>
                    <h3 className='text-[22px] text-black font-semibold'>Create YouTube Challenge Video</h3>
                    <p className='text-[#6F6F76] py-2'>Here is how to make a trending challenge video on YouTube and get the traffic you need! </p>
                </div>
            </div>
            
             
           </div>
        </div>
    );
};

export default Topics;