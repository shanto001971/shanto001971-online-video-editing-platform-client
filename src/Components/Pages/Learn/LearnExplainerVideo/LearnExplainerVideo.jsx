import { MdKeyboardArrowRight } from "react-icons/md";
import LearnExplainerBanner from "./LearnExplainerBanner";
import { Link } from "react-router-dom";
import BrandLogoContainer from "../LearnEducationalVideo/BrandLogoContainer";
import Container from "../Container";
import ExplainerTextContainer from "./ExplainerTextContainer";
import LearnEducationTemplate from "../LearnEducationalVideo/LearnEducationTemplate";
import LearnExplainerBlog from "../LearnExplainerVideo/LeanExplainerBlog";
import LearnExplainerCard from "./LearnExplainerCard";
import VideoTutorial from "../VideoTutorial";
import LearnExplainerFAQ from "./LearnExplainerFAQ";
import LearnFeedbackSection from "../LearnFeedbackSection";
import ExplainerLastSection from "./ExplainerLastSection";
import { Helmet } from "react-helmet-async";

const LearnExplainerVideo = () => {
  return (
    <>
      <Helmet>
        <title>MingleMotion Express | Learn Explainer Video</title>
      </Helmet>
     <div className="mb-20">
      <div className="flex items-center gap-2 md:gap-4 text-[15px] font-semibold text-gray-500 ml-6 mt-4">
        <Link to="/">
          <p className="cursor-pointer">Home</p>
        </Link>
        <MdKeyboardArrowRight className="text-lg" />
        <p className="cursor-pointer">Learn</p>
        <MdKeyboardArrowRight className="text-lg" />
        <p className="cursor-pointer">Explainer Video Software</p>
      </div>

      <Container>
      <LearnExplainerBanner />
      <BrandLogoContainer/>
      <ExplainerTextContainer/>
      <LearnEducationTemplate/>
      <LearnExplainerCard/>
      <VideoTutorial title={"Watch this to learn more about our explainer video maker"}/>
      <LearnExplainerBlog/>
      <LearnExplainerFAQ/>
      <LearnFeedbackSection/>
      <ExplainerLastSection/>
      </Container>
    </div>
    </>
  );
};

export default LearnExplainerVideo;