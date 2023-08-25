import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../../../features/demoImages/demoImagesSlice";
import { FaCrown } from "react-icons/fa";
import { fetchVideos } from "../../../../features/demoVideos/demoVideosSlice";
import { CiSearch } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import HoverVideoPlayer from "react-hover-video-player";
import Loader from "../../../Loader/Loader";

const DemoElement = () => {
  const { isLoading, images, error } = useSelector((state) => state.images);
  const { videos } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const shapeCategoryData = images.find((item) => item.category === "shapes");
  const maskCategoryData = images.find((item) => item.category === "masks");
  const giphyCategoryData = images.find((item) => item.category === "giphys");
  const brandLogoCategoryData = images.find(
    (item) => item.category === "brand logos"
  );
  const emojiCategoryData = images.find((item) => item.category === "emojis");
  const stickerCategoryData = images.find(
    (item) => item.category === "stickers"
  );
  const overlaysCategoryData = videos.find(
    (item) => item.category === "Overlays"
  );

  let shapeData = [];
  let maskData = [];
  let giphyData = [];
  let brandLogoData = [];
  let emojiData = [];
  let stickerData = [];
  let overlaysData = [];

  if (shapeCategoryData) {
    shapeData = shapeCategoryData.data?.map((object) => ({
      img: object.img,
    }));
  }
  if (maskCategoryData) {
    maskData = maskCategoryData.data?.map((object) => ({
      img: object.img,
    }));
  }
  if (giphyCategoryData) {
    giphyData = giphyCategoryData.data?.map((object) => ({
      img: object.img,
    }));
  }
  if (brandLogoCategoryData) {
    brandLogoData = brandLogoCategoryData.data?.map((object) => ({
      img: object.img,
    }));
  }
  if (emojiCategoryData) {
    emojiData = emojiCategoryData.data?.map((object) => ({
      img: object.img,
    }));
  }
  if (stickerCategoryData) {
    stickerData = stickerCategoryData.data?.map((object) => ({
      img: object.img,
    }));
  }
  if (overlaysCategoryData) {
    overlaysData = overlaysCategoryData.data?.map((object) => ({
      video_src: object.video_src,
    }));
  }

  // console.log("shapes data", shapeData);
  // console.log("masks data", maskData);
  // console.log("giphy data", giphyData);
  // console.log("brand logo data", brandLogoData);
  // console.log("emoji data", emojiData);
  // console.log("stickers data", stickerData);
  // console.log("overlays data", overlaysData);

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h6 className="text-sm font-semibold">Add Element</h6>
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
        <h6 className="text-sm font-semibold pl-2">Stickers</h6>
        <div className="grid grid-cols-4">
          {emojiData &&
            emojiData.slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="group relative p-3 m-[3px] bg-gray-50 rounded-md hover:bg-gray-100"
              >
                <img
                  title="Drag and drop on canvas"
                  className="w-full group-hover:scale-105 transition-transform rounded-sm"
                  src={item?.img}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold pl-2">Shapes</h6>
        <div className="grid grid-cols-4 gap-0">
          {shapeData &&
            shapeData.slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="group relative p-3 m-[3px] bg-gray-50 rounded-md hover:bg-gray-100"
              >
                <img
                  title="Drag and drop on canvas"
                  className="group-hover:scale-105 transition-transform rounded-sm"
                  src={item?.img}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-5">
        <h6 className="text-sm font-semibold pl-2 mb-2">GIFs</h6>
        <div className="grid grid-cols-4">
          {giphyData &&
            giphyData.slice(0, 8).map((item, index) => (
              <div key={index} className="group relative p-1 rounded-sm">
                <img
                  title="Drag and drop on canvas"
                  className="h-14 group-hover:scale-105 transition-transform rounded-sm"
                  src={item?.img}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold pl-2 mb-2">Brand Logo</h6>
        <div className="grid grid-cols-4">
          {brandLogoData &&
            brandLogoData.slice(0, 8).map((item, index) => (
              <div key={index} className="group relative p-2 rounded-sm">
                <img
                  title="Drag and drop on canvas"
                  className="h-14 group-hover:scale-105 transition-transform rounded-sm"
                  src={item?.img}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold pl-2 mb-2">Masks</h6>
        <div className="grid grid-cols-4">
          {maskData &&
            maskData.slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="group relative p-2 m-[3px] bg-gray-50 rounded-md hover:bg-gray-100"
              >
                <img
                  title="Drag and drop on canvas"
                  className="h-12 group-hover:scale-105 transition-transform rounded-sm"
                  src={item?.img}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>

      <div className="my-4">
        <h6 className="text-sm font-semibold pl-1 mb-2">Overlays</h6>
        <div className="grid grid-cols-2 gap-2 relative">
          {overlaysData &&
            overlaysData.slice(0, 6).map((item, index) => (
              <div key={index}>
                <HoverVideoPlayer
                  videoSrc={item.video_src}
                  title="Drag and drop on canvas"
                  videoStyle={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "4px",
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
      </div>
    </>
  );
};

export default DemoElement;