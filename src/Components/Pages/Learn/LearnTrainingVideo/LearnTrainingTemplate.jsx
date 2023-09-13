import Marquee from "react-fast-marquee";
import { trainingTemplateData } from "./LearnTrainingData";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LearnTrainingTemplate = () => {
  return (
    <div className="text-center my-20 md:my-32 bg-gray-100 py-10 md:py-16 rounded-xl">
      <h2 className="text-2xl md:text-4xl font-semibold">Get Inspired</h2>
      <h6 className="text-base mt-3 md:mt-6 mb-14 px-2 md:px-0">
        Click on a Template to get started right away. Education video creation
        in just a few clicks.
      </h6>
      <Marquee
        className="my-10"
        direction="right"
        speed={100}
        pauseOnHover={true}
      >
        {trainingTemplateData &&
          trainingTemplateData.length > 0 &&
          trainingTemplateData.map((item) => (
            <div key={item._id}>
              <img
                className="h-[250px] md:h-[385px] rounded-2xl mx-3"
                src={item.img}
                alt={item.title}
              />
            </div>
          ))}
      </Marquee>
      <Link to="/all-templates">
        <button className="btn btn-sm text-black md:min-w-[200px] md:h-[53px] bg-transparent hover:bg-gray-200 group">
          <p className="text-lg capitalize">Browse Templates</p>
          <FaArrowRight className="text-lg group-hover:translate-x-[2px]" />
        </button>
      </Link>
    </div>
  );
};

export default LearnTrainingTemplate;
