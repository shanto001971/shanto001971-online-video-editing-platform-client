import video_editor from "../../../../public/video_editor_1.webp";
import logo_1 from "../../../../public/tiktok_logo.png";
import logo_2 from "../../../../public/logo-2.png";
import logo_3 from "../../../../public/logo-3.png";
import "./OnlineVideoEditor.css";
import { FaArrowRight } from "react-icons/fa";
import SwiperSection from "./SwiperSection/SwiperSection";
import CreateDemoVideo from "./CreateDemoVideo/CreateDemoVideo";
import Tools from "./Tools/Tools";
import Faq from "./Faq/Faq";
import Topics from "./Topics/Topics";
import GoToSignUp from "./GoToSignUp/GoToSignUP";
import EditFeature from "./EditFeature/EditFeature";
import EditFeaturesReverse from "./EditFeatureReverse/EditFeatureReverse";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const OnlineVideoEditor = () => {
  const { theme, changesThemeTextColor, changesThemeBgColor } = useTheme(); //for dark and light themes

  return (
    <>
      <Helmet>
        <title>MingleMotion Express | Online Video Editor</title>
      </Helmet>
      <div
        className={`flex flex-col lg:flex-row w-full px-5 md:px-20 ${
          theme.mode === "dark" ? "text-gray-100" : "linear_bg text-black"
        }`}
      >
        {/* left div content */}
        <div className="w-full lg:w-5/12 flex items-center justify-left md:justify-center  md:text-center lg:text-left">
          <div className="">
            <h2 className="text-[30px] md:text-[40px] lg:text-[58px] text-center md:text-center font-bold  lg:text-left leading-tight">
              Free Online <br /> Video Editor
            </h2>
            <p
              className={`article_body2 mb-10 ${
                theme.mode === "dark" ? "text-gray-100" : " text-[#54545c]"
              }`}
            >
              Create stunning videos to grow your business and <br /> engage the
              audience. Social media clips, promo videos, <br /> slideshows, and
              more are just at your fingertips.
            </p>
            <div className=" ">
              <div className="flex gap-5 md:justify-between">
                <Link to="/register">
                  <button className="btn  text-white min-w-[200px] h-[53px] signin-button bg-black">
                    Sign Up
                    <span class="arrow-icon">
                      <FaArrowRight />
                    </span>
                  </button>
                </Link>
                <button className="btn bg-transparent border-2  h-[53px] text-black hover:text-white">
                  Edit Online
                </button>
              </div>
              <p className="mt-2 text-sm">*No credit card required</p>
            </div>
          </div>
        </div>
        {/* right div image */}
        <div className="w-full lg:w-7/12">
          <img className="w-full" src={video_editor} alt="" />
        </div>
      </div>

      <div
        className={`pb-5 ${
          theme.mode === "dark"
            ? "bg-gray-800 text-gray-100"
            : "bg-[#F5F8FC] text-black"
        }`}
      >
        <div className="text-center py-6">
          <p>Trusted by</p>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row pb-10 gap-8">
          <img className="w-[170px] h-[62px]" src={logo_1} alt="" />
          <img className="w-[170px] h-[62px]" src={logo_2} alt="" />
          <img className="w-[170px] h-[62px]" src={logo_3} alt="" />
        </div>
      </div>
      {/* ohters components */}
      <EditFeature />
      <EditFeaturesReverse />
      <SwiperSection />
      <CreateDemoVideo />
      <Tools />
      <Faq />
      <Topics />
      <GoToSignUp />
    </>
  );
};

export default OnlineVideoEditor;
