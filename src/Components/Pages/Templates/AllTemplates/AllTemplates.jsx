import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../../../features/demoVideos/demoVideosSlice";
import HoverVideoPlayer from "react-hover-video-player";
import Loader from "../../../Loader/Loader";
import AllTemplateModal from "./AllTemplateModal";
import { Helmet } from "react-helmet-async";

const AllTemplates = () => {
  let [isOpen, setIsOpen] = useState(false); //for modal
  const [selectedData, setSelectedData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    "Demo Template videos"
  );

  const {
    isLoading,
    videos: templateVideosData,
    error,
  } = useSelector((state) => state.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = templateVideosData.find(
    (categoryItem) => categoryItem.category === selectedCategory
  );

  const handleDetailsTemplate = (item) => {
    setSelectedData(item); // Set the selected data when a video is clicked
    setIsOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>MingleMotion Express | All Templates</title>
      </Helmet>
      <div className="mx-10">
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl text-start font-bold">
          Explore Unlimited <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent'>Mingle Motion Templates!</span>
        </h2>
        <p className="text-sm sm:text-base mb-6">
          Got a video to create? No worries, we've got virtually unlimited video
          templates to help you jazz it up! Whether it's for social media
          videos, YouTube videos, corporate presentations or just funny meme
          videos, our templates are super easy to use and fully customizable
          with a drag-and-drop interface. Make your videos pop!
        </p>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center lg:items-start lg:ml-6">
          {/* Page content here */}
          {isLoading && <Loader/>}
          {error && (
          <h6 className="text-base font-semibold text-red-600">
            {error.massage}
          </h6>
        )}
          <div className="grid grid-cols-2 sm:grid-cols-3 my-6 gap-0 sm:gap-4 lg:gap-1">
            {/* Template video modal */}
            <AllTemplateModal
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
                  className="mx-2 my-2 lg:my-0 rounded-xl group"
                >
                  <HoverVideoPlayer
                    className="lg:h-[360px]"
                    videoSrc={item.video_src}
                    videoStyle={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    pausedOverlay={
                      <img
                        className="md:z-0"
                        src={item?.img}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    }
                    loadingOverlay={
                      <div className="loading-overlay">
                        <div className="loading-spinner" />
                      </div>
                    }
                  />
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 mb-4 lg:mb-10">{item.title}</p>
                </div>
              ))}
          </div>

          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <p className="absolute -top-4 right-2 text-sm font-normal mr-4 cursor-pointer">
              Categories
            </p>
            <AiOutlineMenu className="absolute -top-3 right-0" />
          </label>
        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="w-52 min-h-full bg-white text-base-content text-[13px] font-medium space-y-1 pt-3 pl-2 lg:pl-0 lg:mt-0">
            {/* Sidebar content here */}
            <li>All Categories</li>
            {templateVideosData.map((categoryItem, index) => (
              <button
                key={index}
                className={`text-xs sm:text-[13px] whitespace-nowrap px-1 py-1 rounded-md ${
                  selectedCategory === categoryItem.category
                    ? "bg-gray-100 text-gray-950 font-medium"
                    : "bg-white hover:bg-gray-200 text-gray-500"
                }`}
                onClick={() => handleCategoryClick(categoryItem.category)}
              >
                {categoryItem.category}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default AllTemplates;