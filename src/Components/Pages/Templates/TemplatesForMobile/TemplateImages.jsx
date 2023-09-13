import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImgTemplate } from "../../../../features/template/templateImagesSlice";
import Loader from "../../../Loader/Loader";
import TemplateImgModal from "./TemplateImgModal";

const TemplateImages = ({ searchQuery, filteredImages }) => {
  let [isOpen, setIsOpen] = useState(false); //for modal
  const [selectedData, setSelectedData] = useState(null);
    //For dark and light mode
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
    const changedTheme = () => {
      return theme === "dark" ? "bg-[var(--dark-mode-bg)] text-[var(--dark-text-white)]" : "bg-gray-100";
    }
  
    const changedTextColor = () => {
      return theme === "dark" ? "text-[var(--dark-text-gray)]" : "text-gray-600"
    }
  
    useEffect(() => {
      changedTheme();
      changedTextColor();
    }, [theme]);

  const {
    isLoading,
    templateImg: templateImagesData,
    error,
  } = useSelector((state) => state.templateImg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImgTemplate());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState("Product Display");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = templateImagesData.find(
    (categoryItem) => categoryItem.category === selectedCategory
  );

  const handleDetailsTemplate = (item) => {
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
        {searchQuery.length > 0 && filteredImages ? (
          <><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 my-6 gap-0 sm:gap-4 lg:gap-1">
          {/* For Template modal */}
          <TemplateImgModal
            selectedCategoryData={selectedCategoryData}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedData={selectedData}
          />
          {filteredImages &&
            filteredImages.map((item, index) => (
              <div
                onClick={() => handleDetailsTemplate(item)}
                key={index}
                className="mx-2 my-2 rounded-xl group"
              >
                <img
                  className="h-[215px] w-[215px] rounded-lg group-hover:scale-105 transition-transform"
                  src={item.img}
                  alt={item.title}
                />
                <p className="text-sm text-gray-600 mt-2">{item.title}</p>
              </div>
            ))}
        </div></>
        ) : (
          <>
            <div className="flex flex-row items-center overflow-x-auto gap-2 custom-scrollbar mt-4">
              {templateImagesData.map((categoryItem, index) => (
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
              {/* For Template modal */}
              <TemplateImgModal
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
                    <img
                      className="h-[215px] w-[215px] rounded-lg group-hover:scale-105 transition-transform"
                      src={item.img}
                      alt={item.title}
                    />
                    <p className="text-sm text-gray-600 mt-2">{item.title}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TemplateImages;
