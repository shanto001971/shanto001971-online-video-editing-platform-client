import { AiOutlineLayout, AiOutlineWarning } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const ImageModalData = ({ selectedData, closeModal, selectedCategoryData }) => {
  const { theme } = useTheme();
  const { _id, title, img, img_url, author, description } = selectedData;
  const remainCategoryData = selectedCategoryData.data.filter(
    (data) => data._id !== _id
  );

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
        <div className="md:flex justify-between gap-4">
          <img className="w-full rounded-lg" src={img} alt="" />
        </div>
        <div className="lg:ml-10 sm:mt-6 ">
          <h4 className="text-lg sm:text-2xl font-bold">{title}</h4>
          <div className={`flex items-center gap-2 mt-4 ${theme.mode === "dark" ? 'text-gray-100' : "text-gray-600"}`}>
            <p className="text-xs font-medium border-[2px] px-2 py-1 rounded-sm">
              {description[0]}
            </p>
            <p className="text-xs font-medium border-[2px] px-2 py-1 rounded-sm">
              {description[1]}
            </p>
          </div>
          <div className="flex gap-2 items-center mt-4 mb-2">
            <img className="w-6 h-6 rounded-full avatar" src={img_url} alt="" />
            <h6 className={`text-sm sm:text-base ${theme.mode === "dark" ? 'text-gray-100' : "text-gray-600"}`}>{author}</h6>
          </div>
          
          <Link to="/dashboard">
            <button className="btn btn-outline btn-xs sm:btn-sm my-6">
              Use this template
            </button>
          </Link>

          <div className={`flex items-center gap-2 text-xs sm:text-sm mb-2 ${theme.mode === "dark" ? 'text-gray-100' : "text-gray-600"}`}>
            <AiOutlineLayout />
            <p>1:1 aspect ratio used</p>
          </div>
          <div className={`flex items-center gap-2 text-xs sm:text-sm mb-2 ${theme.mode === "dark" ? 'text-gray-100' : "text-gray-600"}`}>
            <AiOutlineWarning />
            <p>Available for commercial use</p>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {remainCategoryData &&
            remainCategoryData.map((item) => (
              <div className="group" key={item._id}>
                <Link to="/dashboard">
                  <img className="rounded-md group-hover:scale-105 transition-transform" src={item?.img} alt="" />
                  <p className={`text-xs sm:text-sm mt-2 ${theme.mode === "dark" ? 'text-gray-100' : "text-gray-600"}`}>{item.title}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ImageModalData;
