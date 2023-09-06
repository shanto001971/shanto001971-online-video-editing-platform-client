import { FaRegQuestionCircle } from "react-icons/fa";
import { eductionAccordionText } from "./LearnEducationData";
const LearnEducationFAQ = () => {
    return (
        <div className="my-20 md:flex items-center gap-16">
            <div className="flex-col md:w-[550px] space-y-4">
                <FaRegQuestionCircle className="text-6xl text-blue-600 mx-auto"/>
                <h2 className="text-4xl font-semibold w-1/2 mx-auto">Frequently Asked Questions</h2>
            </div>
            <div className="md:w-[600px]">
                {eductionAccordionText && eductionAccordionText.length > 0 && eductionAccordionText.map(item=> (
                    <div key={item._id} className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" checked="checked" /> 
                    <div className="collapse-title text-xl font-semibold">
                      {item.question}
                    </div>
                    <div className="collapse-content"> 
                      <p>{item.ans}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    );
};

export default LearnEducationFAQ;