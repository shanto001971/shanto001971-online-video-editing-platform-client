import { trainingSubsectionData } from "./LearnTrainingData";
import subsectionImg from "../../../../assets/learn/Training/subsection.png";

const TrainingVideoSubsection = () => {
  return (
    <div className="my-20 md:my-32 md:flex items-center justify-center gap-16 lg:gap-32">
      <div className="md:w-[556px]">
        <h2 className="text-start text-2xl md:text-4xl font-semibold ml-4 md:ml-0">
          How to Create a Training Video
        </h2>
        {trainingSubsectionData &&
          trainingSubsectionData.length > 0 &&
          trainingSubsectionData.map((item) => (
            <div key={item._id} className="mt-6 mx-4 md:mx-0">
              <h6 className="text-base md:text-xl font-semibold my-2">
                {item.title}
              </h6>
              <p className="text-sm md:text-base">{item.description}</p>
            </div>
          ))}
      </div>
      <div className="md:w-[556px] mt-8 md:mt-0 mx-4 md:mx-0">
        <img src={subsectionImg} alt="" />
      </div>
    </div>
  );
};

export default TrainingVideoSubsection;
