import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideosTemplate } from "../../../features/template/templateVideosSlice";
import Loader from "../../Loader/Loader";
import HoverVideoPlayer from "react-hover-video-player";

const TemplateVideos = () => {
  const {
    isLoading,
    templateVideos: templateVideosData,
    error,
  } = useSelector((state) => state.templateVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideosTemplate());
  }, [dispatch]);

  console.log(templateVideosData);

  const [selectedCategory, setSelectedCategory] = useState("Music");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = templateVideosData.find(
    (categoryItem) => categoryItem.category === selectedCategory
  );
  console.log(selectedCategory);
  return (
    <>
      <div>
        {isLoading && <Loader />}
        {error && (
          <h6 className="text-base font-semibold text-red-600">
            {error.massage}
          </h6>
        )}
      </div>
      <div className="my-6">
        <div className="flex flex-row items-center overflow-x-auto gap-2 custom-scrollbar mt-4">
          {templateVideosData.map((categoryItem, index) => (
            <button
              key={index}
              className={`text-xs sm:text-sm md:text-base whitespace-nowrap px-3 py-1 rounded-md ${
                selectedCategory === categoryItem.category
                  ? "bg-gray-200 text-gray-950 font-medium"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleCategoryClick(categoryItem.category)}
            >
              {categoryItem.category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 my-6 gap-0 sm:gap-4 lg:gap-1">
          {selectedCategoryData &&
            selectedCategoryData.data.map((item, index) => (
              <div key={index} className="mx-2 my-2 rounded-xl group">
                <HoverVideoPlayer
                className="lg:h-[360px]"
                videoSrc={item.video_src}
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
                <p className="text-sm text-gray-600 mt-2">{item.title}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TemplateVideos;
