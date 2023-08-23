import tool_1 from '../../../../assets/tools_image/tools_1.webp';
import tool_2 from '../../../../assets/tools_image/tools_2.webp';
import tool_3 from '../../../../assets/tools_image/tools_3.webp';
import tool_4 from '../../../../assets/tools_image/tools_4.webp';
import tool_5 from '../../../../assets/tools_image/tools_5.webp';
import tool_6 from '../../../../assets/tools_image/tools_6.webp';
import tool_7 from '../../../../assets/tools_image/tools_7.webp';
import tool_8 from '../../../../assets/tools_image/tools_8.webp';


const Tools = () => {
    return (
        <div className="bg-white px-5 md:px-20">
            <h2 className="text-center text-4xl font-bold text-black pt-20 pb-10">One-stop tools, professional videos</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center pb-10 md:pb-40'>
            <vid className=" flex flex-col items-center py-16 rounded-2xl bg-[#F5F8FC] hover:scale-105 transform transition-transform duration-300">
                <div className='w-[52px] pb-2'><img src={tool_1} alt="" /></div>
                <h3 className='text-[#54545c] text-2xl font-semibold'>Text to Speech</h3>
            </vid>
            <vid className="flex flex-col items-center py-16 rounded-2xl bg-[#F5F8FC] hover:scale-105 transform transition-transform duration-300">
                <div className='w-[52px] pb-2'><img src={tool_2} alt="" /></div>
                <h3 className='text-[#54545c] text-2xl font-semibold'>Effects & Filters</h3>
            </vid>
            <vid className="flex flex-col items-center py-16 rounded-2xl bg-[#F5F8FC] hover:scale-105 transform transition-transform duration-300">
                <div className='w-[52px] pb-2'><img src={tool_3} alt="" /></div>
                <h3 className='text-[#54545c] text-2xl font-semibold'>Trendy Music</h3>
            </vid>
            <vid className="flex flex-col items-center py-16 rounded-2xl bg-[#F5F8FC] hover:scale-105 transform transition-transform duration-300">
                <div className='w-[52px] pb-2'><img src={tool_4} alt="" /></div>
                <h3 className='text-[#54545c] text-2xl font-semibold'>Sound Effects</h3>
            </vid>
            <vid className="flex flex-col items-center py-16 rounded-2xl bg-[#F5F8FC] hover:scale-105 transform transition-transform duration-300">
                <div className='w-[52px] pb-2'><img src={tool_5} alt="" /></div>
                <h3 className='text-[#54545c] text-2xl font-semibold'>Auto Subtitles</h3>
            </vid>
            <vid className="flex flex-col items-center py-16 rounded-2xl bg-[#F5F8FC] hover:scale-105 transform transition-transform duration-300">
                <div className='w-[52px] pb-2'><img src={tool_6} alt="" /></div>
                <h3 className='text-[#54545c] text-2xl font-semibold'>Transcribe Videos</h3>
            </vid>
            <vid className="flex flex-col items-center py-16 rounded-2xl bg-[#F5F8FC] hover:scale-105 transform transition-transform duration-300">
                <div className='w-[52px] pb-2'><img src={tool_7} alt="" /></div>
                <h3 className='text-[#54545c] text-2xl font-semibold'>Text Overlay</h3>
            </vid>
            <vid className="flex flex-col items-center py-16 rounded-2xl bg-[#F5F8FC] hover:scale-105 transform transition-transform duration-300">
                <div className='w-[52px] pb-2'><img src={tool_8} alt="" /></div>
                <h3 className='text-[#54545c] text-2xl font-semibold'>Remove Backgroud</h3>
            </vid>
        </div>
        </div>
    );
};

export default Tools;