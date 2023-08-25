import "./Template.css";
import templateImage from "../../../assets/template.png";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplate } from "../../../features/template/templateSlice";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";

const Templates = () => {
  const { isLoading, template:templateData, error } = useSelector((state) => state.template);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplate());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState("Product Display");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const selectedCategoryData = templateData.find((categoryItem) => categoryItem.category === selectedCategory);

  return (
    <div className="relative">
      <img
        className="mx-1 sm:mx-auto rounded-xl h-[215px]"
        src={templateImage}
        alt=""
      />
      <div className="absolute top-6 sm:top-8 left-4 lg:left-40">
        <h4 className="text-2xl font-bold">Templates</h4>
        <p className="text-sm sm:text-[17px] text-gray-600 mt-3 sm:w-3/4 sm:leading-6">
          Motion mingle thousands of free trending templates are just a few clicks
          away. Create stunning videos and images with them effortlessly.
        </p>
        <div className="mt-3">
          <CiSearch className="absolute mt-3 ml-4 text-lg text-gray-700" />
          <input
            type="text"
            className="border bg-gray-100 rounded-3xl pl-10 h-10 w-3/4 sm:w-1/2 text-[13px]  focus:outline-none font-medium focus:border-blue-300"
            placeholder="Search"
          />
        </div>
      </div>

      {isLoading && <Loader/>}
      {error && <h6 className="text-base font-semibold text-red-600">{error.massage}</h6>}

      <div className="lg:mx-32 mx-2 sm:mx-4 my-6">
        <h2 className="text-2xl font-bold text-left">Image</h2>
        <div className="flex flex-row items-center overflow-x-auto gap-3 custom-scrollbar mt-4">

        {templateData.map((categoryItem, index) => (
            <button
              key={index}
              className={`text-xs sm:text-sm md:text-base whitespace-nowrap px-3 py-1 rounded-md ${
                selectedCategory === categoryItem.category ? "bg-gray-200 text-gray-950 font-medium" : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleCategoryClick(categoryItem.category)}
            >
              {categoryItem.category}
            </button>
          ))}
        </div>
        
      {/* Render selected category images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 my-6 gap-0 sm:gap-4 lg:gap-1">
        {selectedCategoryData && selectedCategoryData.data.map((item, index) => (
          <div key={index} className="mx-2 my-2 rounded-xl group">
            <img
              className="h-[215px] w-[215px] rounded-lg group-hover:scale-105 transition-transform"
              src={item.img}
              alt={item.title}
            />
            <p className="text-sm text-gray-600 mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Templates;