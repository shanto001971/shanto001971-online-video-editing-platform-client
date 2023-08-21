import video_editor from '../../../../public/video_editor_1.webp'
import logo_1 from '../../../../public/tiktok_logo.png'
import logo_2 from '../../../../public/logo-2.png'
import logo_3 from '../../../../public/logo-3.png'
import './OnlineVideoEditor.css';
import { FaArrowRight } from 'react-icons/fa';
const OnlineVideoEditor = () => {

    return (
        <div className=' '>
            
           <div className='flex flex-col lg:flex-row w-full linear_bg'>
            {/* left div content */}
                <div className='w-full lg:w-1/2  flex items-center justify-center'>
                    <div className=''>
                    <h2 className='text-black text-[58px] font-bold text-left leading-tight'>
                       Free Online <br /> Video Editor
                    </h2>
                    <p className='article_body2 text-[#54545c]  mb-10 '>
                    Create stunning videos to grow your business and <br /> engage the audience. Social media clips, promo videos, <br /> slideshows, and more are just at your fingertips.
                    </p>
                    <div className=' '>

                                <div className='flex gap-5 '>
                                 <button className='btn  text-white min-w-[200px] h-[53px] signin-button bg-black'>Sign Up
                                 <span class="arrow-icon"><FaArrowRight /></span>
                                 </button>                           
                                 <button className='btn bg-transparent border-2  h-[53px] text-black hover:text-white'>Edit Online</button>                           
                                </div>
                                 <p className='mt-2 text-sm'>*No credit card required</p>
                    </div>
                   
                    </div>
                </div>
                {/* right div image */}
                <div className='w-full lg:w-1/2'>
                    <img src={video_editor} alt="" />
                </div>
           </div>

            <div className='bg-[#F5F8FC]'> 
               <div className='text-center py-6'><p>Trusted by</p></div>
               <div className='flex justify-center items-center flex-col md:flex-row pb-10 gap-8'>
                <img className='w-[170px] h-[62px]' src={logo_1} alt="" />
                <img className='w-[170px] h-[62px]' src={logo_2} alt="" />
                <img className='w-[170px] h-[62px]' src={logo_3} alt="" />
               </div>
            </div>

        </div>
    );
};

export default OnlineVideoEditor;