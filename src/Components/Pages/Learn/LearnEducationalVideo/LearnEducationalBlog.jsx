import { eductionBlogData } from "./LearnEducationData";

const LearnEducationalBlog = () => {
  return (
    <div className="my-20 md:my-32">
      <div className="my-20 md:flex items-center justify-center gap-16 lg:gap-32">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-2xl md:text-4xl font-semibold">{eductionBlogData[0].title}</h2>
          <p className="text-sm md:text-base">{eductionBlogData[0].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={eductionBlogData[0].img} alt="" />
        </div>
      </div>

      <div className="my-20 md:flex flex-row-reverse items-center justify-center gap-16 lg:gap-28">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-2xl md:text-4xl font-semibold">{eductionBlogData[1].title}</h2>
          <p className="text-sm md:text-base">{eductionBlogData[1].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={eductionBlogData[1].img} alt="" />
        </div>
      </div>

      <div className="my-20 md:flex items-center justify-center gap-16 lg:gap-32">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-2xl md:text-4xl font-semibold">{eductionBlogData[2].title}</h2>
          <p className="text-sm md:text-base">{eductionBlogData[2].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={eductionBlogData[2].img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LearnEducationalBlog;
