import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../../../features/demoVideos/demoVideosSlice";
import { FaCrown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import HoverVideoPlayer from "react-hover-video-player";
import Loader from "../../../Loader/Loader";

const More = () => {
  const { isLoading, videos, error } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const moreOneCategoryData = videos.find(
    (item) => item.category === "More one"
  );
  const moreTwoCategoryData = videos.find(
    (item) => item.category === "More two"
  );
  const moreThreeOneCategoryData = videos.find(
    (item) => item.category === "More three-one"
  );
  const moreThreeTwoCategoryData = videos.find(
    (item) => item.category === "More three-two"
  );
  const moreThreeThreeCategoryData = videos.find(
    (item) => item.category === "More three-three"
  );
  const moreThreeFourCategoryData = videos.find(
    (item) => item.category === "More three-four"
  );
  const moreThreeFiveCategoryData = videos.find(
    (item) => item.category === "More three-five"
  );

  let moreOneData = [];
  let moreTwoData = [];
  let moreThreeOneData = [];
  let moreThreeTwoData = [];
  let moreThreeThreeData = [];
  let moreThreeFourData = [];
  let moreThreeFiveData = [];

  if (moreOneCategoryData) {
    moreOneData = moreOneCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }
  if (moreTwoCategoryData) {
    moreTwoData = moreTwoCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }
  if (moreThreeOneCategoryData) {
    moreThreeOneData = moreThreeOneCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }
  if (moreThreeTwoCategoryData) {
    moreThreeTwoData = moreThreeTwoCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }
  if (moreThreeThreeCategoryData) {
    moreThreeThreeData = moreThreeThreeCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }
  if (moreThreeFourCategoryData) {
    moreThreeFourData = moreThreeFourCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }
  if (moreThreeFiveCategoryData) {
    moreThreeFiveData = moreThreeFiveCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }

  // console.log("more one  data", moreOneData);
  // console.log("more two  data", moreTwoData);
  // console.log("more three one  data", moreThreeOneData);
  // console.log("more three two data", moreThreeTwoData);
  // console.log("more three three  data", moreThreeThreeData);
  // console.log("more three four data", moreThreeFourData);
  // console.log("more three five data", moreThreeFiveData);
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h6 className="text-sm font-semibold">Add More Transition</h6>
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

      <div className="mt-2 mb-4">
        <h6 className="text-sm font-semibold mb-4 pl-1">One</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {moreOneData &&
            moreOneData.map((item, index) => (
              <div key={index}>
                <HoverVideoPlayer
                  videoSrc={item.video_src}
                  title="Drag and drop on canvas"
                  videoStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "2px",
                  }}
                  pausedOverlay={
                    <img
                      src="https://i.ibb.co/CPVqRY3/grid1.png"
                      alt="overly image"
                      style={{
                        // Make the image expand to cover the video's dimensions
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
            ))}
        </div>
      </div>
      <div className="my-4">
        <h6 className="text-sm font-semibold mb-4 pl-1">Two</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {moreTwoData &&
            moreTwoData.map((item, index) => (
              <div key={index}>
                <HoverVideoPlayer
                  videoSrc={item.video_src}
                  title="Drag and drop on canvas"
                  videoStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "2px",
                  }}
                  pausedOverlay={
                    <img
                      src="https://i.ibb.co/92wQhVh/grid2.png"
                      alt="overly image"
                      style={{
                        // Make the image expand to cover the video's dimensions
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold mb-4 pl-1">Three #1</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {moreThreeOneData &&
            moreThreeOneData.map((item, index) => (
              <div key={index}>
                <HoverVideoPlayer
                  videoSrc={item.video_src}
                  title="Drag and drop on canvas"
                  videoStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "2px",
                  }}
                  pausedOverlay={
                    <img
                      src="https://i.ibb.co/4N79RP5/grid3.png"
                      alt="overly image"
                      style={{
                        // Make the image expand to cover the video's dimensions
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold mb-4 pl-1">Three #2</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {moreThreeTwoData &&
            moreThreeTwoData.map((item, index) => (
              <div key={index}>
                <HoverVideoPlayer
                  videoSrc={item.video_src}
                  title="Drag and drop on canvas"
                  videoStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "2px",
                  }}
                  pausedOverlay={
                    <img
                      src="https://i.ibb.co/ph1wTPh/grid4.png"
                      alt="overly image"
                      style={{
                        // Make the image expand to cover the video's dimensions
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold mb-4 pl-1">Three #3</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {moreThreeThreeData &&
            moreThreeThreeData.map((item, index) => (
              <div key={index}>
                <HoverVideoPlayer
                  videoSrc={item.video_src}
                  title="Drag and drop on canvas"
                  videoStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "2px",
                  }}
                  pausedOverlay={
                    <img
                      src="https://i.ibb.co/qRsHgRf/grid5.png"
                      alt="overly image"
                      style={{
                        // Make the image expand to cover the video's dimensions
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold mb-4 pl-1">Three #4</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {moreThreeFourData &&
            moreThreeFourData.map((item, index) => (
              <div key={index}>
                <HoverVideoPlayer
                  videoSrc={item.video_src}
                  title="Drag and drop on canvas"
                  videoStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "2px",
                  }}
                  pausedOverlay={
                    <img
                      src="https://i.ibb.co/4N79RP5/grid3.png"
                      alt="overly image"
                      style={{
                        // Make the image expand to cover the video's dimensions
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold mb-4 pl-1">Three #5</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {moreThreeFiveData &&
            moreThreeFiveData.map((item, index) => (
              <div key={index}>
                <HoverVideoPlayer
                  videoSrc={item.video_src}
                  title="Drag and drop on canvas"
                  videoStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "2px",
                  }}
                  pausedOverlay={
                    <img
                      src="https://i.ibb.co/ph1wTPh/grid4.png"
                      alt="overly image"
                      style={{
                        // Make the image expand to cover the video's dimensions
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default More;