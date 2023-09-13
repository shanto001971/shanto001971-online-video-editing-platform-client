import HoverVideoPlayer from "react-hover-video-player";
import { TbMovie } from "react-icons/tb";
import { AiOutlineFire, AiOutlineLayout } from "react-icons/ai";
import { PiTextTBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedData2 } from "../../../../features/template/templateVideosSlice";

const AllTemplateModalData = ({ selectedData, closeModal, selectedCategoryData }) => {
  const dispatch = useDispatch();

  const { _id, title, video_src, img_url, img, author, description} =
    selectedData;
  const remainCategoryData = selectedCategoryData.data.filter(
    (data) => data._id !== _id
  );

  const handleStoreData = (item) => {
    dispatch(setSelectedData2(item));
  };

  return (
    <>
      <div className="relative">
        <RxCross1
          title="close"
          onClick={closeModal}
          className="absolute block md:hidden md:text-lg font-bold cursor-pointer -top-3 -right-3"
        />
      </div>
      <div className="mt-2 md:flex justify-between gap-4">
        <HoverVideoPlayer
          className=""
          videoSrc={video_src}
          videoStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
          pausedOverlay={
            <img
              className="md:z-0"
              src={img}
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
        <div className="lg:ml-10 sm:mt-6">
          <h4 className="text-lg sm:text-2xl font-bold">{title}</h4>
          <p className="text-xs sm:text-sm my-2 text-gray-600">{description}</p>
          <div className="flex gap-2 items-center mt-4 mb-2">
            <img className="w-6 h-6 rounded-full avatar" src={img_url} alt="" />
            <h6 className="text-sm sm:text-base text-gray-600">{author}</h6>
          </div>

          <Link to="/dashboard">
            <button className="btn btn-outline btn-xs sm:btn-sm my-6">
              Use this template
            </button>
          </Link>
          <div className="flex items-center gap-2 text-xs sm:text-sm mb-2 text-gray-600">
            <TbMovie />
            <p>18 clips required</p>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm mb-2 text-gray-600">
            <PiTextTBold />
            <p>3 text materials required</p>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm mb-2 text-gray-600">
            <AiOutlineLayout />
            <p>9:16 aspect ratio used</p>
          </div>
        </div>
        <RxCross1
          title="close"
          onClick={closeModal}
          className="hidden md:block -mt-3 -mr-3 text-2xl font-bold cursor-pointer"
        />
      </div>
      <div className="mt-10 sm:mt-16 mb-4 sm:mb-6 lg:mb-10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg sm:text-2xl font-extrabold">Similar templates</h2>
          <div className="-mt-4 sm:mt-0 flex items-center gap-1 cursor-pointer">
            <p className="text-xs sm:text-sm font-semibold">View all templates</p>
            <IoIosArrowForward className="text-sm sm:text-base mt-[2px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {remainCategoryData &&
            remainCategoryData.map((item) => (
              <div onClick={() => handleStoreData(item)} key={item._id}>
                <Link to="/dashboard">
                  <HoverVideoPlayer
                    className="h-[240px] sm:h-[260px] w-full"
                    videoSrc={item?.video_src}
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
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.title}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllTemplateModalData;
