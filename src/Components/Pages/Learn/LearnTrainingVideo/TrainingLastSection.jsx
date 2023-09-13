import { FaArrowRight } from "react-icons/fa";
import sectionImg from "../../../../assets/learn/page-end.png";
import { Link } from "react-router-dom";

const TrainingLastSection = () => {
  return (
    <div className="mt-20 md:mt-32 lg:mt-52">
      <div className="text-center">
        <h4 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">
          More than a training video maker
        </h4>
        <p className="text-sm md:text-base mb-8 leading-6">
          Need a simple all-in-one tool for your video editing needs? From
          creating training videos to social media videos to promo videos – VEED
          has your back. Get started for free, no credit card required.
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

export default TrainingLastSection;
