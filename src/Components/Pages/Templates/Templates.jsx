import "./Template.css";
import templateImage from "../../../assets/template.png";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TemplateVideos from "./TemplateVideos";
import TemplateImages from "./TemplateImages";

const Templates = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 for Videos, 1 for Images

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

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
          Motion mingle thousands of free trending templates are just a few
          clicks away. Create stunning videos and images with them effortlessly.
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
                border: "none",
                backgroundColor: "transparent",
                color: activeTab === 0 ? "#000" : "#888",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Video
            </Tab>
            <Tab
              onClick={() => handleTabClick(1)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: activeTab === 1 ? "#000" : "#888",
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "-10px",
              }}
            >
              Image
            </Tab>
          </TabList>

          <TabPanel>
            <TemplateVideos />
          </TabPanel>
          <TabPanel>
            <TemplateImages />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Templates;
