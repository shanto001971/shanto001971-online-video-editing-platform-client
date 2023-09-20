import { Helmet } from "react-helmet-async";
import Banner from "../BannerSection/Banner";
import VideoLayout from "../Pages/VideoLayout/VideoLayout";
import SideIcon from "../SideIcon/SideIcon";
import TemplateVideo from "../TemplateVideoSection/TemplateVideo";
import VoiceSection from "../VoiceSection/VoiceSection";
import Feedback from "./Feedback/Feedback";
import MakeVideo from "./MakeVideo/MakeVideo";
import ScrollSection from "./ScrollSection/ScrollSection";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const Home = () => {
  const {
    theme,
  } = useTheme();
	
  return (
    <div className={`${theme.mode === 'dark' ? 'text-white' : 'text-black'}`}>
      <Helmet>
        <title>MingleMotion Express | Home</title>
      </Helmet>
      <Banner />
      <TemplateVideo />
      <VoiceSection />
      <VideoLayout/>
      <ScrollSection/>
      <SideIcon/>
      <Feedback />
      <MakeVideo/>
    </div>
  );
};

export default Home;
