import { Link } from "react-router-dom";
import Container from "../Container";
import LearnEducationalBanner from "./LearnEducationalBanner";
import { MdKeyboardArrowRight } from "react-icons/md";
import BrandLogoContainer from "./BrandLogoContainer";
import EducationTextContainer from "./EducationTextContainer";
import LearnEducationTemplate from "./LearnEducationTemplate";
import LearnEducationalCard from "./LearnEducationalCard";
import VideoTutorial from "../VideoTutorial";
import LearnEducationalBlog from "./LearnEducationalBlog";
import LearnEducationFAQ from "./LearnEducationFAQ";
import LearnFeedbackSection from "../LearnFeedbackSection";
import EducationLastSection from "./EducationLastSection";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const LearnEducationalVideo = () => {
  const { theme, changesThemeBgColor, changesThemeTextColor } = useTheme(); //for dark and light theme
  return (
    <>
      <Helmet>
        <title>MingleMotion Express | Learn Educational Video</title>
      </Helmet>
      <div className={`mb-20 ${changesThemeTextColor()}`}>
      <div className="flex items-center gap-2 md:gap-4 text-[15px] font-semibold ml-6 mt-4">
        <Link to="/">
          <p className="cursor-pointer">Home</p>
        </Link>
        <MdKeyboardArrowRight className="text-lg"/>
          <p className="cursor-pointer">Learn</p>
        <MdKeyboardArrowRight className="text-lg"/>
        <p className="cursor-pointer">Educational Video Maker</p>
      </div>
      <Container>
        <LearnEducationalBanner />
        <BrandLogoContainer/>
        <EducationTextContainer/>
        <LearnEducationTemplate/>
        <LearnEducationalCard/>
        <VideoTutorial title={"‘Educational Video’ Tutorial"}/>
        <LearnEducationalBlog/>
        <LearnEducationFAQ/>
        <LearnFeedbackSection/>
        <EducationLastSection/>
      </Container>
    </div>
    </>
  );
};

export default LearnEducationalVideo;
