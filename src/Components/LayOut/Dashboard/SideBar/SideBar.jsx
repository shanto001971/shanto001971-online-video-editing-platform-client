import { SlCloudUpload } from "react-icons/sl";
import { PiVideoLight } from "react-icons/pi";
import { LiaImageSolid } from "react-icons/lia";
import { PiMusicNoteLight } from "react-icons/pi";
import { RxText } from "react-icons/rx";
import { TbMoodEdit } from "react-icons/tb";
import { SiSemanticrelease } from "react-icons/si";
import { GoProjectTemplate } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import DemoVideo from "../../../Pages/VideoEditPage/DemoVideo/DemoVideo";
import DemoImage from "../../../Pages/VideoEditPage/DemoImage/DemoImage";
import DemoMusic from "../../../Pages/VideoEditPage/DemoMusic/DemoMusic";
import DemoTemplate from "../../../Pages/VideoEditPage/DemoTemplate/DemoTemplate";
import './Sidebar.css'
import DemoText from "../../../Pages/VideoEditPage/DemoText/DemoText";
import DemoLogo from "../../../Pages/VideoEditPage/DemoLogo/DemoLogo";
import DemoElement from "../../../Pages/VideoEditPage/DemoElement/DemoElement";
import More from "../../../Pages/VideoEditPage/More/More";

const SideBar = () => {
  const [activeComponent, setActiveComponent] = useState('DemoVideo'); //by default component uses active component

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary px-8 py-3 font-semibold rounded bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-gray-100
            mt-6 mr-36 lg:hidden"
          >
            Open drawer
          </label>
          
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
          <ul className="menu p-0 w-[360px] h-full bg-gray-50 lg:bg-white text-base-content border-r-2 border-slate-400">
            {/* <VideoEditPageSidebar/> */}
            {/* Side icon bar here(1st column) */}
            <>
              <div className="flex flex-col gap-6 items-center justify-center border-r-[1px] w-[50px] sm:w-[60px] h-auto py-2 z-10 shadow-md">
                <div className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group cursor-pointer">
                  <SlCloudUpload className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    Uploads
                  </span>
                </div>

                <button onClick={() => handleButtonClick('DemoVideo')} className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group cursor-pointer">
                  <PiVideoLight className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    Videos
                  </span>
                </button>

                <button onClick={() => handleButtonClick('DemoImage')} className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
                  <LiaImageSolid className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    Images
                  </span>
                </button>

                <button onClick={() => handleButtonClick('DemoMusic')} className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
                  <PiMusicNoteLight className="text-[20px] sm:text-[28px] group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    Music
                  </span>
                </button>

                <button onClick={() => handleButtonClick('DemoText')} className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
                  <RxText className="text-[20px] sm:text-[28px] group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    Text
                  </span>
                </button>

                <button onClick={() => handleButtonClick('DemoLogo')} className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
                  <TbMoodEdit className="text-[20px] sm:text-[28px] group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    Logo
                  </span>
                </button>

                <button onClick={() => handleButtonClick('DemoElement')} className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
                  <SiSemanticrelease className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    Elements
                  </span>
                </button>

                <button onClick={() => handleButtonClick('DemoTemplate')} className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
                  <GoProjectTemplate className="text-[20px] sm:text-[28px]  group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    Templates
                  </span>
                </button>

                <button onClick={() => handleButtonClick('More')} className="flex flex-col items-center justify-center text-gray-700 hover:text-gray-950 group">
                  <BsThreeDots className="text-[20px] sm:text-[28px] group-hover:scale-95" />
                  <span className="text-[8px] sm:text-[10px] font-medium">
                    More
                  </span>
                </button>
              </div>
            </>

            {/* 2nd column content here */}
            <>
            <div className="w-[270px] h-[100vh] overflow-y-scroll custom-scrollbar">
            
            {activeComponent === 'DemoVideo' && <DemoVideo />}
            {activeComponent === 'DemoImage' && <DemoImage />}
            {activeComponent === 'DemoMusic' && <DemoMusic />}
            {activeComponent === 'DemoTemplate' && <DemoTemplate />}
            {activeComponent === 'DemoText' && <DemoText />}
            {activeComponent === 'DemoLogo' && <DemoLogo />}
            {activeComponent === 'DemoElement' && <DemoElement />}
            {activeComponent === 'More' && <More />}
            </div>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
