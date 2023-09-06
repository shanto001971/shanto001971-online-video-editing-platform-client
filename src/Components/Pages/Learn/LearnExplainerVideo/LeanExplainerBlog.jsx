import { explainerBlogData } from "./LearnExplainerData";

const LeanExplainerBlog = () => {
    return (
        <div className="my-20 md:my-32">
      <div className="my-20 md:flex items-center justify-center gap-16 lg:gap-32">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-2xl md:text-4xl font-semibold">{explainerBlogData[0].title}</h2>
          <p className="text-sm md:text-base">{explainerBlogData[0].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={explainerBlogData[0].img} alt="" />
        </div>
      </div>

      <div className="my-20 md:flex flex-row-reverse items-center justify-center gap-16 lg:gap-28">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-2xl md:text-4xl font-semibold">{explainerBlogData[1].title}</h2>
          <p className="text-sm md:text-base">{explainerBlogData[1].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={explainerBlogData[1].img} alt="" />
        </div>
      </div>

      <div className="my-20 md:flex items-center justify-center gap-16 lg:gap-32">
        <div className="w-full md:w-[1/2]">
          <h2 className="text-start text-2xl md:text-4xl font-semibold">{explainerBlogData[2].title}</h2>
          <p className="text-sm md:text-base">{explainerBlogData[2].description}</p>
        </div>
        <div className="w-full md:w-[1/2]">
          <img src={explainerBlogData[2].img} alt="" />
        </div>
      </div>
    </div>
    );
};

export default LeanExplainerBlog;