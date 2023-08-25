import React, { useEffect } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { CiSearch } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../../../features/demoVideos/demoVideosSlice";
import Loader from "../../../Loader/Loader";

const DemoVideo = () => {
  const { isLoading, videos, error } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const videoCategoryData = videos.find((item) => item.category === "videos");

  let videoData = [];
  if (videoCategoryData) {
    videoData = videoCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  } else {
    console.log("Video category data not found in the data array.");
  }

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h6 className="text-sm font-semibold">Add Video</h6>
        <div className="text-pink-700 flex items-center gap-[2px] bg-pink-100 px-2 rounded-sm cursor-pointer">
          <FaCrown className="text-xs" />
          <p className="text-[10px] font-semibold">Remove watermark</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="relative w-full">
          <CiSearch className="absolute left-[10px] top-[6px] text-base text-gray-500" />
          <input
            type="text"
            className="border bg-gray-100 rounded-3xl pl-7 h-[26px] w-full text-[13px]  focus:outline-none font-medium focus:border-blue-300"
            placeholder="Search"
          />
        </div>
        <div>
          <BsFilter className="-mt-5 text-xl text-gray-600 cursor-pointer" />
        </div>
      </div>
      {isLoading && <Loader />}
      {error && <h6 className="text-sm text-red-600">{error.message}</h6>}

      <div className="grid grid-cols-2 gap-2 relative">
        {videoData &&
          videoData.map((item, index) => (
            <div key={index}>
              <HoverVideoPlayer
                videoSrc={item.video_src}
                title="Drag and drop on canvas"
                videoStyle={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "2px",
                }}
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default DemoVideo;