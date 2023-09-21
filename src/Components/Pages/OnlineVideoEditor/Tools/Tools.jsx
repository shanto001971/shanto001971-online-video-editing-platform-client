import tool_1 from "../../../../assets/tools_image/tools_1.webp";
import tool_2 from "../../../../assets/tools_image/tools_2.webp";
import tool_3 from "../../../../assets/tools_image/tools_3.webp";
import tool_4 from "../../../../assets/tools_image/tools_4.webp";
import tool_5 from "../../../../assets/tools_image/tools_5.webp";
import tool_6 from "../../../../assets/tools_image/tools_6.webp";
import tool_7 from "../../../../assets/tools_image/tools_7.webp";
import tool_8 from "../../../../assets/tools_image/tools_8.webp";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const Tools = () => {
  const { theme, changesThemeTextColor, changesThemeBgColor } = useTheme(); // using for dark and light themes
  return (
    <div
      className={`px-5 md:px-20 ${
        theme.mode === "dark" ? "text-gray-100" : "bg-white"
      }`}
    >
      <h2 className="text-center text-[30px] md:text-[40px] lg:text-[58px] font-bold pt-20 pb-10">
        One-stop tools, professional videos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center pb-10 md:pb-40">
        <div
          className={`flex flex-col items-center py-16 rounded-2xl  hover:scale-105 transform transition-transform duration-300 ${
            theme.mode === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-[#F5F8FC] text-gray-700"
          }`}
        >
          <div className="w-[52px] pb-2">
            <img src={tool_1} alt="" />
          </div>
          <h3 className="text-md md:text-lg lg:text-2xl font-semibold">Text to Speech</h3>
        </div>
        <div
          className={`flex flex-col items-center py-16 rounded-2xl  hover:scale-105 transform transition-transform duration-300 ${
            theme.mode === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-[#F5F8FC] text-gray-700"
          }`}
        >
          <div className="w-[52px] pb-2">
            <img src={tool_2} alt="" />
          </div>
          <h3 className="text-md md:text-lg lg:text-2xl font-semibold">Effects & Filters</h3>
        </div>
        <div
          className={`flex flex-col items-center py-16 rounded-2xl  hover:scale-105 transform transition-transform duration-300 ${
            theme.mode === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-[#F5F8FC] text-gray-700"
          }`}
        >
          <div className="w-[52px] pb-2">
            <img src={tool_3} alt="" />
          </div>
          <h3 className="text-md md:text-lg lg:text-2xl font-semibold">Trendy Music</h3>
        </div>
        <div
          className={`flex flex-col items-center py-16 rounded-2xl  hover:scale-105 transform transition-transform duration-300 ${
            theme.mode === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-[#F5F8FC] text-gray-700"
          }`}
        >
          <div className="w-[52px] pb-2">
            <img src={tool_4} alt="" />
          </div>
          <h3 className="text-md md:text-lg lg:text-2xl font-semibold">Sound Effects</h3>
        </div>
        <div
          className={`flex flex-col items-center py-16 rounded-2xl  hover:scale-105 transform transition-transform duration-300 ${
            theme.mode === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-[#F5F8FC] text-gray-700"
          }`}
        >
          <div className="w-[52px] pb-2">
            <img src={tool_5} alt="" />
          </div>
          <h3 className="text-md md:text-lg lg:text-2xl font-semibold">Auto Subtitles</h3>
        </div>
        <div
          className={`flex flex-col items-center py-16 rounded-2xl  hover:scale-105 transform transition-transform duration-300 ${
            theme.mode === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-[#F5F8FC] text-gray-700"
          }`}
        >
          <div className="w-[52px] pb-2">
            <img src={tool_6} alt="" />
          </div>
          <h3 className="text-md md:text-lg lg:text-2xl font-semibold">Transcribe videos</h3>
        </div>
        <div
          className={`flex flex-col items-center py-16 rounded-2xl  hover:scale-105 transform transition-transform duration-300 ${
            theme.mode === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-[#F5F8FC] text-gray-700"
          }`}
        >
          <div className="w-[52px] pb-2">
            <img src={tool_7} alt="" />
          </div>
          <h3 className="text-md md:text-lg lg:text-2xl font-semibold">Text Overlay</h3>
        </div>
        <div
          className={`flex flex-col items-center py-16 rounded-2xl  hover:scale-105 transform transition-transform duration-300 ${
            theme.mode === "dark"
              ? "bg-gray-800 text-gray-100"
              : "bg-[#F5F8FC] text-gray-700"
          }`}
        >
          <div className="w-[52px] pb-2">
            <img src={tool_8} alt="" />
          </div>
          <h3 className="text-md md:text-lg lg:text-2xl font-semibold">Remove Background</h3>
        </div>
      </div>
    </div>
  );
};

export default Tools;
