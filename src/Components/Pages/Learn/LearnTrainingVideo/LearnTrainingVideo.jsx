import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../Container";
import LearnTrainingBanner from "./LearnTrainingBanner";
import BrandLogoContainer from "../LearnEducationalVideo/BrandLogoContainer";
import TrainingTextContainer from "./TrainingTextContainer";
import LearnTrainingTemplate from "./LearnTrainingTemplate";
import LearnTrainingCard from "./LearnTrainingCard";
import VideoTutorial from "../VideoTutorial";
import LearnTrainingFAQ from "./LearnTrainingFAQ";
import LearnFeedbackSection from "../LearnFeedbackSection";
import TrainingLastSection from "./TrainingLastSection";
import TrainingVideoSubsection from "./TrainingVideoSubsection";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const LearnTrainingVideo = () => {
  const { theme, changesThemeBgColor, changesThemeTextColor } = useTheme(); //for dark and light theme

  return (
    <>
      <Helmet>
        <title>MingleMotion Express | Learn Training Video</title>
      </Helmet>
      <div className={`mb-20 ${changesThemeTextColor()}`}>
      <div className="flex items-center gap-2 md:gap-4 text-[15px] font-semibold ml-6 mt-4">
        <Link to="/">
          <p className="cursor-pointer">Home</p>
        </Link>
        <MdKeyboardArrowRight className="text-lg" />
        <p className="cursor-pointer">Learn</p>
        <MdKeyboardArrowRight className="text-lg" />
        <p className="cursor-pointer">Training Videos</p>
      </div>
      <Container>
        <LearnTrainingBanner/>
        <BrandLogoContainer/>
        <TrainingTextContainer/>
        <LearnTrainingTemplate/>
        <TrainingVideoSubsection/>
        <LearnTrainingCard/>
        <VideoTutorial title={"‘Training Video Maker’ Tutorial"}/>
        <LearnTrainingFAQ/>
        <LearnFeedbackSection/>
        <TrainingLastSection/>
      </Container>
    </div>
    </>
  );
};

export default LearnTrainingVideo;
