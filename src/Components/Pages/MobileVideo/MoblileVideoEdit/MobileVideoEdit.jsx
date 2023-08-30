import { Link } from "react-router-dom";
import mobile_video_banner from '../../../../assets/mobile_image/mobile_video_banner.webp'
import mobile_image_1 from '../../../../assets/mobile_image/mobile_1.webp'
import mobile_image_2 from '../../../../assets/mobile_image/mobile_2.webp'
import mobile_image_3 from '../../../../assets/mobile_image/mobile_3.webp'
import mobile_image_4 from '../../../../assets/mobile_image/mobile_4.webp'
import mobile_image_5 from '../../../../assets/mobile_image/mobile_5.webp'
import mobile_image_6 from '../../../../assets/mobile_image/mobile_6.webp'
import mobile_image_7 from '../../../../assets/mobile_image/mobile_7.webp'

const MobileVideoEdit = () => {
    return (
        <div>
           


        <div className='py-20 flex flex-col lg:flex-row w-full linear_bg px-5 md:px-20' >
         {/* left div content */}
             <div className='w-full lg:w-5/12  flex items-center justify-left'>
                 <div className=''>
                 <h2 className='text-black text-[58px] font-bold text-left leading-tight'>
                 Capture the Moment for Masterpiece
                 </h2>
                 <p className='article_body2 text-[#54545c]  mb-10 '>
                 Motion Mingle is a free all-in-one video editing app that gets everything you need to create stunning videos. Start your creative journey now!</p>
                 <div className=' '>

                             <div className='flex gap-5 w-full'>
                              <Link to="/" className="w-full">
                              <button className='btn w-full text-white h-[53px] signin-button bg-black'> Download for mobile
                              {/* <span class="arrow-icon"><FaArrowRight /></span> */}
                              </button> 
                              </Link>
                              
                             
                             </div>
                               
                 </div>
                
                 </div>
             </div>
             {/* right div image */}
             <div className='w-full lg:w-7/12'>
                 <img className='w-full' src={mobile_video_banner} alt="" />
             </div>
        </div>

     {/* second section start */}

     <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             <div>
                 <img src={mobile_image_1} alt="" />
             </div>
             <div className="flex items-center justify-left gap-5"> 
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left md:ps-20 ">Trending templates</h2>
                <p className="text-[#46464c] text-center md:text-left  md:ps-20">Just write your text that you wish to convert to speech in the box and choose from a wide range of languages, including English, Korean, Portuguese, Turkish, Spanish, Indonesian, Russian, German, Arabic and French.</p>
              </div>
             </div>
          </div>
          
     </div>


     <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-3">
             
             <div className="flex items-center justify-left gap-5"> 
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left ">Easy transitions</h2>
                <p className="text-[#46464c] text-center md:text-left  ">No need for complicated editing. Choose any transition you like to help move your story along.</p>
              </div>
             </div>

             <div>
                 <img src={mobile_image_2} alt="" />
             </div>
          </div>
          
     </div>



     <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
    <img src={mobile_image_3} alt="" />
</div>
<div className="flex items-center justify-left gap-5"> 
 <div>
   <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left md:ps-20 ">Auto captions and lyrics</h2>
   <p className="text-[#46464c] text-center md:text-left  md:ps-20">Just import an audio or a song, and you can get accurate captions and lyrics automatically.</p>
 </div>
</div>
</div>

    </div>


    <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

    <div className="grid  grid-cols-1 md:grid-cols-2 gap-3">

    <div className="flex items-center justify-left gap-5"> 
    <div>
    <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left ">Effects and filters</h2>
    <p className="text-[#46464c] text-center md:text-left ">Use advanced effects and filters to create cinematic and fantastic videos.</p>
    </div>
    </div>

    <div>
        <img src={mobile_image_4} alt="" />
    </div>
    </div>

    </div>


    <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div>
        <img src={mobile_image_5} alt="" />
    </div>
    <div className="flex items-center justify-left gap-5"> 
    <div>
    <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left md:ps-20 ">Professional cutout</h2>
    <p className="text-[#46464c] text-center md:text-left md:ps-20">Professional cutout helps you get the exact part you want easily and quickly.</p>
    </div>
    </div>
    </div>

    </div>


    <div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

    <div className="grid  grid-cols-1 md:grid-cols-2 gap-3">

    <div className="flex items-center justify-left gap-5"> 
    <div>
    <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left ">In & Out animation</h2>
    <p className="text-[#46464c] text-center md:text-left ">Try our in & out animations to make your videos full of surprises.</p>
    </div>
    </div>

    <div>
        <img src={mobile_image_6} alt="" />
    </div>
    </div>

    </div>



<div className='py-20 flex flex-col lg:flex-row w-full bg-white px-5 md:px-20'>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
    <img src={mobile_image_7} alt="" />
</div>
<div className="flex items-center justify-left gap-5"> 
 <div>
   <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left md:ps-20 ">AI generated effects</h2>
   <p className="text-[#46464c] text-center md:text-left  md:ps-20">Have fun creating amazing videos with viral effects generated by AI.</p>
 </div>
</div>
</div>

</div>
 




     </div>
    );
};

export default MobileVideoEdit;