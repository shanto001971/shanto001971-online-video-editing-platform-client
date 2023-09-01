import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import desktop_video_banner from '../../../../assets/desktop_image/desktop_video_banner.webp'
import desktop_image_1 from '../../../../assets/desktop_image/desktop_1.jpg'
import desktop_image_2 from '../../../../assets/desktop_image/desktop_2.jpg'
import desktop_image_3 from '../../../../assets/desktop_image/desktop_3.jpg'
import desktop_image_4 from '../../../../assets/desktop_image/desktop_4.jpg'
import desktop_image_5 from '../../../../assets/desktop_image/desktop_5.jpg'
import desktop_image_6 from '../../../../assets/desktop_image/desktop_6.jpg'

const DesktopVideoEdit = () => {
    return (
        <div>
           


           <div className='py-20 flex flex-col lg:flex-row w-full linear_bg px-5 md:px-20' >
            {/* left div content */}
                <div className='w-full lg:w-5/12  flex items-center justify-left'>
                    <div className=''>
                    <h2 className='text-black text-[58px] font-bold text-left leading-tight'>
                    Free Professional Desktop Video Editor
                    </h2>
                    <p className='article_body2 text-[#54545c]  mb-10 '>
                    Where AI power meets professional editing experience - Motion Mingle Desktop editor will unleash your creativity with massive AI features, such as Script to Video, Auto Reframe, and Auto Captions.                    </p>
                    <div className=' '>

                                <div className='flex gap-5 w-full'>
                                 <Link to="/" className="w-full">
                                 <button className='btn w-full text-white h-[53px] signin-button bg-black'> Download for windows
                                 {/* <span class="arrow-icon"><FaArrowRight /></span> */}
                                 </button> 
                                 </Link>
                                 
                                
                                </div>
                                  
                    </div>
                   
                    </div>
                </div>
                {/* right div image */}
                <div className='w-full lg:w-7/12'>
                    <img className='w-full' src={desktop_video_banner} alt="" />
                </div>
           </div>

        {/* second section start */}

        <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <img src={desktop_image_1} alt="" />
                </div>
                <div className="flex items-center justify-left gap-5"> 
                 <div>
                   <h2 className="text-3xl md:text-6xl font-bold text-black text-center md:text-left md:ps-20 ">Easy to use</h2>
                   <p className="text-[#46464c] text-center md:text-left text-[22px] md:ps-20">Unlock your productivity with a simple interface and intuitive shortcuts.</p>
                 </div>
                </div>
             </div>
             
        </div>


        <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

             <div className="grid  grid-cols-1 md:grid-cols-2 gap-3">
                
                <div className="flex items-center justify-left gap-5"> 
                 <div>
                   <h2 className="text-3xl md:text-6xl font-bold text-black text-center md:text-left ">Trending effects</h2>
                   <p className="text-[#46464c] text-center md:text-left text-[22px]">Edit videos with thousands of free effects, animations and transitions.</p>
                 </div>
                </div>

                <div>
                    <img src={desktop_image_2} alt="" />
                </div>
             </div>
             
        </div>



        <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
   <div>
       <img src={desktop_image_3} alt="" />
   </div>
   <div className="flex items-center justify-left gap-5"> 
    <div>
      <h2 className="text-3xl md:text-6xl font-bold text-black text-center md:text-left md:ps-20 ">Text feature</h2>
      <p className="text-[#46464c] text-center md:text-left text-[22px] md:ps-20">Rich and powerful text feature, use stunning way to create texts.</p>
    </div>
   </div>
</div>

</div>


<div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

<div className="grid  grid-cols-1 md:grid-cols-2 gap-3">
   
   <div className="flex items-center justify-left gap-5"> 
    <div>
      <h2 className="text-3xl md:text-6xl font-bold text-black text-center md:text-left ">Keyframe animations</h2>
      <p className="text-[#46464c] text-center md:text-left text-[22px]">Professional animation feature for complex editing workflow, make your animation smooth and dynamic.</p>
    </div>
   </div>

   <div>
       <img src={desktop_image_4} alt="" />
   </div>
</div>

</div>




<div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
   <div>
       <img src={desktop_image_5} alt="" />
   </div>
   <div className="flex items-center justify-left gap-5"> 
    <div>
      <h2 className="text-3xl md:text-6xl font-bold text-black text-center md:text-left md:ps-20 ">Auto captions</h2>
      <p className="text-[#46464c] text-center md:text-left text-[22px] md:ps-20">AI-generate captions in one click, multiple languages are supported.</p>
    </div>
   </div>
</div>

</div>


<div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

<div className="grid  grid-cols-1 md:grid-cols-2 gap-3">
   
   <div className="flex items-center justify-left gap-5"> 
    <div>
      <h2 className="text-3xl md:text-6xl font-bold text-black text-center md:text-left ">High quality</h2>
      <p className="text-[#46464c] text-center md:text-left text-[22px]">Support 4k 60fps export, keep the highest image quality.</p>
    </div>
   </div>

   <div>
       <img src={desktop_image_6} alt="" />
   </div>
</div>

</div>






        </div>
    );
};

export default DesktopVideoEdit;