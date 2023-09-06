import { educationCardData } from "./LearnEducationData";

const LearnEducationalCard = () => {
  //console.log(educationCardData);
  return (
    <div className="my-20">
      <h2 className="text-4xl font-semibold">How to Create an Educational Video</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
        { educationCardData &&
          educationCardData.length > 0 &&
          educationCardData.map((item) => (
            <div className="px-6 text-center" key={item._id}>
              <img className="lg:w-[320px]" src={item?.img} alt={item.title} />
              <h4 className="text-xl font-bold">{item?.title}</h4>
              <p>{item?.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LearnEducationalCard;