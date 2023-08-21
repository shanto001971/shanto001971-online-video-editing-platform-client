import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight, BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../../../features/demoImages/demoImagesSlice";

const DemoTemplate = () => {
  const { isLoading, images, error } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages())
  }, [dispatch]);

  const templateCategoryData = images.find((item) => item.category === "template");

  let templateData = [];
  if (templateCategoryData) {
    templateData = templateCategoryData.data?.map((object) => ({
      img: object.img,
      title: object.title,
    }));
  } else {
    console.log("Image category data not found in the data array");
  }

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h6 className="text-sm font-semibold">Add Templates</h6>
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
            placeholder="Search templates"
          />
        </div>
        <div>
          <BsFilter className="-mt-5 text-xl text-gray-600 cursor-pointer" />
        </div>
      </div>
      <div className="flex text-[11px] text-gray-500 font-semibold gap-2 px-1 overflow-x-scroll custom-scrollbar cursor-pointer">
        <span className="hover:bg-gray-200 rounded-sm px-1">Intro</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Testimonials</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Offer</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Sideshow</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Ads</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Presentation</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Invites</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Branding</span>
        <span className="hover:bg-gray-200 rounded-sm px-1">Listicles</span>
      </div>
      <div className="flex justify-center items-center gap-2 h-8 bg-gray-100 border-[1px] mb-3 cursor-pointer">
        <AiOutlinePlus />
        <p className="text-xs font-medium">Add blank scene</p>
      </div>
      {templateData && templateData.map((item, index) => (
        <div className="group" key={index}>
          <img
            className="group-hover:scale-105 transition-transform"
            src={item.img}
            alt=""
          />
          <div className="flex justify-between items-center px-1">
            <p className="text-xs font-semibold text-gray-600 mt-1 mb-4">
              {item.title}
            </p>
            <div className="flex items-center gap-1">
              <p className="text-xs font-semibold hidden group-hover:block">
                Use
              </p>
              <BsArrowUpRight className="hidden group-hover:block" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DemoTemplate;
