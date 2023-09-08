import bannerImg from "../../../../assets/learn/Training/banner.png";
import { AiOutlineCloudUpload } from "react-icons/ai";

const LearnTrainingBanner = () => {
    return (
        <div className="text-center md:text-left md:flex md:w-[1/2] justify-center items-center gap-8 mt-14 mb-20 md:my-20">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
        Training Videos
        </h1>
        <p className="text-base mt-4 mb-6 md:my-8">
        Create effective training videos online, free
        </p>
        <button className="btn btn-sm md:btn-md text-white md:min-w-[200px] md::h-[53px] bg-black hover:bg-gray-800 group">
          <p className="text-sm md:text-base">Choose video</p>
          <AiOutlineCloudUpload className="text-2xl group-hover:-translate-y-[2px]" />
        </button>
      </div>
      <div className="mt-10 md:mt-0 md:w-[1/2]">
        <img className="w-full md:w-[670px]" src={bannerImg} alt="banner" />
      </div>
    </div>
    );
};

export default LearnTrainingBanner;