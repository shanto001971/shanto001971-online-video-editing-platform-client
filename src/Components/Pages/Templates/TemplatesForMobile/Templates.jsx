import "./Template.css";
import templateImage from "../../../../assets/template.png";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TemplateVideos from "./TemplateVideos";
import TemplateImages from "./TemplateImages";
import { useDispatch, useSelector } from "react-redux";
import { fetchImgTemplate } from "../../../../features/template/templateImagesSlice";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const Templates = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 for Videos, 1 for Images
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Videos");

  const { theme } = useTheme();

  const { isLoading, templateVideos: templateVideosData } = useSelector(
    (state) => state.templateVideos
  );

  const { templateImg: templateImagesData } = useSelector(
    (state) => state.templateImg
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImgTemplate());
  }, [dispatch]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedCategory, templateVideosData, templateImagesData]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleSearch = () => {
    if (!searchQuery) {
      setFilteredVideos(
        templateVideosData.flatMap((categoryItem) => categoryItem.data)
      );
      setFilteredImages(
        templateImagesData.flatMap((categoryItem) => categoryItem.data)
      );
      return;
    }

    const lowercaseQuery = searchQuery.toLowerCase();
    const filteredVideoData = templateVideosData.flatMap((categoryItem) =>
      categoryItem.data.filter(
        (item) =>
          item.category.toLowerCase().includes(lowercaseQuery) ||
          item.title.toLowerCase().includes(lowercaseQuery)
      )
    );

    const filteredImageData = templateImagesData.flatMap((categoryItem) =>
      categoryItem.data.filter(
        (item) =>
          item.category.toLowerCase().includes(lowercaseQuery) ||
          item.title.toLowerCase().includes(lowercaseQuery)
      )
    );

    setFilteredVideos(filteredVideoData);
    setFilteredImages(filteredImageData);
  };

  const tabStyles = {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "24px",
    fontWeight: "bold",
  };
  
  const tabColor = (tabIndex, activeTab, theme) =>
    activeTab === tabIndex
      ? "#000"
      : theme.mode === "dark"
      ? "text-white"
      : "text-gray-600";
  

  // console.log(selectedCategory);
  // console.log(filteredVideos);
  //console.log(filteredImages);
  // console.log(searchQuery);
  //console.log("template image --------->", templateImagesData);
  // console.log("template videos --------->", templateVideosData);

  return (
    <div className="relative">
      <Helmet>
        <title>MingleMotion Express | Templates For Mobile</title>
      </Helmet>
      <img
        className="mx-1 sm:mx-auto rounded-xl h-[215px]"
        src={templateImage}
        alt=""
      />
      <div className="absolute top-6 sm:top-8 left-4 lg:left-40">
        <h4 className={`text-2xl font-bold `}>Templates</h4>
        <p className="text-sm sm:text-[17px] text-gray-600 mt-3 sm:w-3/4 sm:leading-6">
          Motion mingle thousands of free trending templates are just a few
          clicks away. Create stunning videos and images with them effortlessly.
        </p>
        <div className="mt-3 flex ">
          <select
            className="pl-2 text-sm font-medium rounded-s-xl w-full h-[39px] max-w-[80px] mt-[10px] bg-gray-100"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="Videos">Videos</option>
            <option value="Images">Images</option>
          </select>
          <CiSearch
            // onClick={(e) => setSearchQuery(e.target.value)}
            className="text-lg text-gray-700 z-10 mt-[22px] ml-2"
          />
          <input
            type="text"
            className="border bg-gray-100 rounded-e-xl -ml-7 pl-7 h-10 w-3/4 sm:w-1/2 text-[13px]  focus:outline-none font-medium focus:border-blue-300"
            placeholder="Search category or title"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>
      </div>
      {/* Demo  */}
      <div className="lg:mx-32 mx-2 sm:mx-4 my-6">
        <Tabs>
          <TabList
            style={{
              border: "none",
              marginLeft: "-10px",
            }}
          >
            <Tab
              onClick={() => handleTabClick(0)}
              style={{
                ...tabStyles,
                color: tabColor(0, activeTab, theme),
              }}
            >
              Video
            </Tab>
            <Tab
              onClick={() => handleTabClick(1)}
              style={{
                ...tabStyles,
                color: tabColor(1, activeTab, theme),
                marginLeft: "-10px",
              }}
            >
              Image
            </Tab>
          </TabList>

          <TabPanel>
            <TemplateVideos
              isLoading={isLoading}
              searchQuery={searchQuery}
              filteredVideos={filteredVideos}
            />
          </TabPanel>
          <TabPanel>
            <TemplateImages
              searchQuery={searchQuery}
              filteredImages={filteredImages}
            />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Templates;
