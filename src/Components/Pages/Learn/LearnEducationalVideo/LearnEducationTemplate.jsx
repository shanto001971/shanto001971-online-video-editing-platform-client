import Marquee from "react-fast-marquee";
import { educationTemplateData } from "./LearnEducationData";
import { FaArrowRight } from "react-icons/fa";

const LearnEducationTemplate = () => {
  return (
    <div className="text-center my-20 bg-gray-100 py-20 rounded-xl">
      <h2 className="text-4xl font-semibold">Get Inspired</h2>
      <h6 className="text-base">
        Click on a Template to get started right away. Education video creation
        in just a few clicks.
      </h6>
      <Marquee
        className="my-10"
        direction="right"
        speed={100}
        pauseOnHover={true}
      >
        {educationTemplateData && educationTemplateData.length > 0 &&
          educationTemplateData.map((item) => (
            <div key={item._id}>
              <img
                className="sm:h-[385px] rounded-2xl mx-3"
                src={item.img}
                alt={item.title}
              />
            </div>
          ))}
      </Marquee>
      <button className="btn btn-sm text-black min-w-[200px] h-[53px] bg-transparent hover:bg-gray-200 group">
        <p className="text-lg capitalize">Browse Templates</p>
        <FaArrowRight className="text-lg group-hover:translate-x-[2px]" />
      </button>
    </div>
  );
};

export default LearnEducationTemplate;
