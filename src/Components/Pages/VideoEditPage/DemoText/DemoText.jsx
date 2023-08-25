import React, { useEffect } from "react";
import { FaCrown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../../../features/demoVideos/demoVideosSlice";
import { CiCirclePlus } from "react-icons/ci";
import Loader from "../../../Loader/Loader";

const DemoText = () => {
  const { isLoading, videos, error } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const typographyCategoryData = videos.find(
    (item) => item.category === "Typography"
  );
  const minimalistCategoryData = videos.find(
    (item) => item.category === "Minimalist"
  );
  const socialMediaCategoryData = videos.find(
    (item) => item.category === "Social Media"
  );
  const astonsCategoryData = videos.find((item) => item.category === "Astons");
  const trendyCategoryData = videos.find((item) => item.category === "Trendy");

  let typographyData = [];
  let minimalistData = [];
  let socialMediaData = [];
  let astonsData = [];
  let trendyData = [];

  if (typographyCategoryData) {
    typographyData = typographyCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }

  if (minimalistCategoryData) {
    minimalistData = minimalistCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }

  if (socialMediaCategoryData) {
    socialMediaData = socialMediaCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }

  if (astonsCategoryData) {
    astonsData = astonsCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }

  if (trendyCategoryData) {
    trendyData = trendyCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }

  // console.log("Typography Data", typographyData);
  // console.log("Minimalist Data", minimalistData);
  // console.log("Social Data", socialMediaData);
  // console.log("Astons Data", astonsData);
  // console.log("Trendy Data", trendyData);

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h6 className="text-sm font-semibold">Add Text</h6>
        <div className="text-pink-700 flex items-center gap-[2px] bg-pink-100 px-2 rounded-sm cursor-pointer">
          <FaCrown className="text-xs" />
          <p className="text-[10px] font-semibold">Remove watermark</p>
        </div>
      </div>

      <div className="h-12 group hover:border-2 flex items-center justify-between px-3 cursor-pointer my-1 rounded-md">
        <h4 className="text-2xl font-semibold">Add a heading</h4>
        <CiCirclePlus className="text-[22px] hidden group-hover:block" />
      </div>

      <div className="h-10 group hover:border-2 flex items-center justify-between px-3 cursor-pointer my-1 rounded-md">
        <h6 className="text-lg font-semibold">Add a subheading</h6>
        <CiCirclePlus className="text-[22px] hidden group-hover:block" />
      </div>

      <div className="h-10 group hover:border-2 flex items-center justify-between px-3 cursor-pointer my-1 rounded-md">
        <p className="text-xs">Add a little bit of body text</p>
        <CiCirclePlus className="text-[22px] hidden group-hover:block" />
      </div>

      <div className="h-24 border-[1px] flex flex-col justify-center px-2 shadow-sm z-10 my-4 rounded-md">
        <h6 className="text-sm font-semibold">My style</h6>
        <p className="text-xs font-medium text-gray-500 mt-2">
          Select a textbox on the canvas and click on 'Save Style' on the top
          panel
        </p>
      </div>

      {isLoading && <Loader />}
      {error && <h6 className="text-sm text-red-600">{error.message}</h6>}

      <div className="border-[1px] rounded-md p-2 my-4">
        <h6 className="text-sm font-semibold  pt-1">Typography</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {typographyData &&
            typographyData.map((item, index) => (
              <div key={index}>
                {/* <HoverVideoPlayer
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
              /> */}
                <video title="Drag and drop on canvas" autoPlay loop>
                  <source src={item.video_src} type="video/mp4" />
                </video>
              </div>
            ))}
        </div>
      </div>

      <div className="border-[1px] rounded-md p-2 my-4">
        <h6 className="text-sm font-semibold pt-1">Minimalist</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {minimalistData &&
            minimalistData.map((item, index) => (
              <div key={index}>
                <video title="Drag and drop on canvas" autoPlay loop>
                  <source src={item.video_src} type="video/mp4" />
                </video>
              </div>
            ))}
        </div>
      </div>

      <div className="border-[1px] rounded-md p-2 my-4">
        <h6 className="text-sm font-semibold pt-1">Social Media & CTA</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {socialMediaData &&
            socialMediaData.map((item, index) => (
              <div key={index}>
                <video title="Drag and drop on canvas" autoPlay loop>
                  <source src={item.video_src} type="video/mp4" />
                </video>
              </div>
            ))}
        </div>
      </div>

      <div className="border-[1px] rounded-md p-2 my-4">
        <h6 className="text-sm font-semibold pt-1">Astons</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {astonsData &&
            astonsData.map((item, index) => (
              <div key={index}>
                <video title="Drag and drop on canvas" autoPlay loop>
                  <source src={item.video_src} type="video/mp4" />
                </video>
              </div>
            ))}
        </div>
      </div>

      <div className="border-[1px] rounded-md p-2 my-4">
        <h6 className="text-sm font-semibold pt-1">Trendy</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {trendyData &&
            trendyData.map((item, index) => (
              <div key={index}>
                <video title="Drag and drop on canvas" autoPlay loop>
                  <source src={item.video_src} type="video/mp4" />
                </video>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DemoText;