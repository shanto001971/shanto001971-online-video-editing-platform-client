import HoverVideoPlayer from "react-hover-video-player";
import { TbMovie } from "react-icons/tb";
import { AiOutlineFire, AiOutlineLayout } from "react-icons/ai";
import { PiTextTBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const VideoModalData = ({ selectedData, closeModal }) => {
  const { title, video_src, img_url, author, description, use } = selectedData;

  return (
    <>
      <div className="relative">
        <RxCross1
          title="close"
          onClick={closeModal}
          className="absolute block md:hidden text-lg font-bold cursor-pointer -top-4 -right-4"
        />
      </div>
      <div className="md:flex justify-between gap-4">
        <HoverVideoPlayer
          className="lg:h-[500px] lg:w-[320px]"
          videoSrc={video_src}
          videoStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
        <div className="lg:ml-10 sm:mt-6">
          <h4 className="text-2xl font-bold">{title}</h4>
          <div className="flex gap-2 items-center mt-4 mb-2">
            <img className="w-6 h-6 rounded-full avatar" src={img_url} alt="" />
            <h6 className="text-base text-gray-600">{author}</h6>
          </div>

          <Link to="/dashboard">
            <button className="btn btn-outline btn-sm my-6">
              Use this template
            </button>
            
          </Link>
          <div className="flex items-center gap-2 text-sm mb-2 text-gray-600">
            <TbMovie />
            <p>{description[0]}</p>
          </div>
          <div className="flex items-center gap-2 text-sm mb-2 text-gray-600">
            <PiTextTBold />
            <p>{description[1]}</p>
          </div>
          <div className="flex items-center gap-2 text-sm mb-2 text-gray-600">
            <AiOutlineLayout />
            <p>{description[2]}</p>
          </div>
          <div className="flex items-center gap-2 text-sm mb-2 text-gray-600">
            <AiOutlineFire />
            <p className="text-sm">{use} use</p>
          </div>
        </div>
        <RxCross1
          title="close"
          onClick={closeModal}
          className="hidden md:block -mt-3 -mr-3 text-2xl font-bold cursor-pointer"
        />
      </div>
    </>
  );
};

export default VideoModalData;
