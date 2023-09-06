import { trainingCardData } from "./LearnTrainingData";

const LearnTrainingCard = () => {
    return (
        <div className="my-20 md:my-32">
      <h2 className="text-2xl md:text-4xl font-semibold">
        How to Create an Educational Video
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 md:pt-10">
        {trainingCardData &&
          trainingCardData.length > 0 &&
          trainingCardData.map((item) => (
            <div className="px-6 mt-6 md:mt-0 text-center" key={item._id}>
              <img className="lg:w-[320px]" src={item?.img} alt={item.title} />
              <h4 className="text-lg mt-2 md:mt-4 font-semibold md:font-bold">
                {item?.title}
              </h4>
              <p className="text-sm md:text-base mt-2">{item?.description}</p>
            </div>
          ))}
      </div>
    </div>
    );
};

export default LearnTrainingCard;