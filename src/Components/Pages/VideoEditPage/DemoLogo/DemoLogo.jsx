import React, { useEffect } from "react";
import { FaCrown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../../../features/demoImages/demoImagesSlice";
import { CiSearch } from "react-icons/ci";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Loader from "../../../Loader/Loader";

const DemoLogo = () => {
  const { isLoading, images, error } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const logoCategoryData = images.find((item) => item.category === "logos");

  let logoData = [];
  if (logoCategoryData) {
    logoData = logoCategoryData.data?.map((object) => ({
      img: object.img,
    }));
  } else {
    console.log("Image category data not found in the data array");
  }

  //console.log("logo Data", logoData);
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h6 className="text-sm font-semibold">Add Logo</h6>
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

      <div className="grid grid-cols-2 gap-2">
        {logoData &&
          logoData.map((item, index) => (
            <div key={index} className="group relative">
              <img
                title="Drag and drop on canvas"
                className="h-20 w-full group-hover:scale-105 transition-transform rounded-sm"
                src={item?.img}
                alt=""
              />
              <AiOutlinePlus
                title="Drag and drop on canvas"
                className="absolute ml-[110px] bottom-1 z-10 hidden text-white  group-hover:block text-xl"
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default DemoLogo;