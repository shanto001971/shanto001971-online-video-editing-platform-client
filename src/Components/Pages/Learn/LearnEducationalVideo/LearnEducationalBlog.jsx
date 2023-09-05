import { eductionBlogData } from "./LearnEducationData";

const LearnEducationalBlog = () => {
  return (
    <div className="">
      <div className="my-20 md:flex items-center justify-center gap-32">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-4xl font-semibold">{eductionBlogData[0].title}</h2>
          <p>{eductionBlogData[0].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={eductionBlogData[0].img} alt="" />
        </div>
      </div>

      <div className="my-20 md:flex flex-row-reverse items-center justify-center gap-28">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-4xl font-semibold">{eductionBlogData[1].title}</h2>
          <p>{eductionBlogData[1].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={eductionBlogData[1].img} alt="" />
        </div>
      </div>

      <div className="my-20 md:flex items-center justify-center gap-32">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-4xl font-semibold">{eductionBlogData[2].title}</h2>
          <p>{eductionBlogData[2].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={eductionBlogData[2].img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LearnEducationalBlog;
