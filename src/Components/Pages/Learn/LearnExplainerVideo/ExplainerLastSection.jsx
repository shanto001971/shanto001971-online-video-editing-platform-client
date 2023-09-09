import { FaArrowRight } from "react-icons/fa";
import sectionImg from "../../../../assets/learn/page-end.png";
import { Link } from "react-router-dom";

const ExplainerLastSection = () => {
  return (
    <div className="mt-20 md:mt-32 lg:mt-52">
      <div className="text-center">
        <h4 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">
        More than an explainer video creator
        </h4>
        <p className="text-sm md:text-base mb-8 leading-6">
        Whether you are creating videos for marketing, advertising, or product releases, Mingle Motion is the best software to use to edit them to perfection. Create how-to videos by recording your screen, and add drawings, shapes, images, and more. You can even add transitions, subtitles, and all other helpful elements to help you convey your message clearly to your audience. Explore our full suite of tools today!
        </p>
        <Link to="/templates-for-mobile">
        <button className="btn btn-sm text-white md:min-w-[200px] md:h-[53px] bg-black hover:bg-gray-800 group">
          <p className="text-sm">Choose video</p>
          <FaArrowRight className="text-base md:text-lg group-hover:translate-x-[2px]" />
        </button>
        </Link>
      </div>
      <div className="mt-16">
        <img src={sectionImg} alt="Section image" />
      </div>
    </div>
  );
};

export default ExplainerLastSection;
