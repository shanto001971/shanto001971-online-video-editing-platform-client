import bannerImg from "../../../../assets/learn/Educational/banner.png";
import { AiOutlineCloudUpload } from 'react-icons/ai';

const LearnEducationalBanner = () => {
  return (
    <div className="md:flex md:w-[1/2] justify-center items-center gap-8 my-20">
      <div>
        <h1 className="text-6xl font-extrabold">Educational Video Maker</h1>
        <p className="text-base my-8">
          Easy and free video creation software for schools
        </p>
        <button className="btn text-white min-w-[200px] h-[53px] bg-black hover:bg-gray-800 group">
          <p>Choose Videos</p>
          <AiOutlineCloudUpload className="text-2xl group-hover:-translate-y-[2px]"/>
        </button>
      </div>
      <div className="md:w-[1/2]">
        <img className="w-full md:w-[670px]" src={bannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default LearnEducationalBanner;
