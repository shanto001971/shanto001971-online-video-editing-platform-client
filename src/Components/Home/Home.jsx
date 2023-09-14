import Banner from "../BannerSection/Banner";
import VideoLayout from "../Pages/VideoLayout/VideoLayout";
import SideIcon from "../SideIcon/SideIcon";
import TemplateVideo from "../TemplateVideoSection/TemplateVideo";
import VoiceSection from "../VoiceSection/VoiceSection";
import Feedback from "./Feedback/Feedback";
import MakeVideo from "./MakeVideo/MakeVideo";
import ScrollSection from "./ScrollSection/ScrollSection";

const Home = () => {
  
	
  return (
    <div>
      <Banner />
      <TemplateVideo />
      <VoiceSection />
      <VideoLayout></VideoLayout>
      <ScrollSection></ScrollSection>
      <SideIcon/>
      <Feedback />
      <MakeVideo/>
    </div>
  );
};

export default Home;
