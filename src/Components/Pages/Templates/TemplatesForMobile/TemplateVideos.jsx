import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVideosTemplate,
  setSelectedData2,
} from "../../../../features/template/templateVideosSlice";
import Loader from "../../../Loader/Loader";
import HoverVideoPlayer from "react-hover-video-player";
import TemplateVideoModal from "./TemplateVideoModal";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const TemplateVideos = ({ filteredVideos, searchQuery }) => {
  let [isOpen, setIsOpen] = useState(false); //for modal
  const [selectedData, setSelectedData] = useState(null); //for selected data
  //For dark and light mode
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { theme } = useTheme();

  const {
    isLoading,
    templateVideos: templateVideosData,
    error,
  } = useSelector((state) => state.templateVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideosTemplate());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState("Music");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = templateVideosData.find(
    (categoryItem) => categoryItem.category === selectedCategory
  );

  const handleDetailsTemplate = (item) => {
    dispatch(setSelectedData2(item));
    setSelectedData(item); // Set the selected data when a video is clicked
    setIsOpen(true);
  };

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
        {searchQuery.length > 0 && filteredVideos ? (
          <>
            {isLoading && <Loader />}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 my-6 gap-0 sm:gap-4 lg:gap-1">
              <TemplateVideoModal
                selectedCategoryData={selectedCategoryData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedData={selectedData}
              />
              {filteredVideos &&
                filteredVideos.map((item, index) => (
                  <div
                    onClick={() => handleDetailsTemplate(item)}
                    key={index}
                    className="mx-2 my-2 rounded-xl group"
                  >
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
                    <p
                      className={`text-sm mt-2 ${
                        theme.mode === "dark"
                          ? "text-gray-100"
                          : "text-gray-600 "
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row items-center overflow-x-auto gap-2 custom-scrollbar mt-4">
              {templateVideosData.map((categoryItem, index) => (
                <button
                  key={index}
                  className={`text-xs sm:text-sm md:text-base whitespace-nowrap px-3 py-1 rounded-md ${
                    theme.mode === "dark"
                      ? `bg-gray-800 text-white`
                      : "bg-gray-100"
                  } ${
                    selectedCategory === categoryItem.category
                      ? " text-gray-950 font-medium"
                      : " text-gray-600"
                  }`}
                  onClick={() => handleCategoryClick(categoryItem.category)}
                >
                  {categoryItem.category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 my-6 gap-0 sm:gap-4 lg:gap-1">
              {/* Template video modal */}
              <TemplateVideoModal
                selectedCategoryData={selectedCategoryData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                selectedData={selectedData}
              />
              {selectedCategoryData &&
                selectedCategoryData.data.map((item, index) => (
                  <div
                    onClick={() => handleDetailsTemplate(item)}
                    key={index}
                    className="mx-2 my-2 rounded-xl group"
                  >
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
                    <p className={`text-sm mt-2 ${theme.mode === "dark" ? 'text-gray-100' : "text-gray-600"}`}>
                      {item.title}
                    </p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TemplateVideos;
