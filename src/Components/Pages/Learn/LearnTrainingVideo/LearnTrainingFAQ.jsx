import { FaRegQuestionCircle } from "react-icons/fa";
import { trainingAccordionText } from "./LearnTrainingData";

const LearnTrainingFAQ = () => {
  return (
    <div className="my-20 md:my-32 md:flex items-center gap-8 lg:gap-16">
      <div className="flex-col md:w-[550px] space-y-4">
        <FaRegQuestionCircle className="text-5xl md:text-6xl text-blue-600 mx-auto" />
        <h2 className="text-2xl md:text-4xl font-semibold lg:w-2/3 mx-auto leading-10">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="md:w-[600px]">
        {trainingAccordionText &&
          trainingAccordionText.length > 0 &&
          trainingAccordionText.map((item) => (
            <div key={item._id} className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-lg md:text-xl font-semibold">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="text-sm md:text-base">{item.ans}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LearnTrainingFAQ;
