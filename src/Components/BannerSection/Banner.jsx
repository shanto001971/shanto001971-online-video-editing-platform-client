import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="lg:absolute top-1/5 p-4 md:p-6 lg:p-10">
        <h1 className="text-6xl font-serif">Powerful video editing</h1>
        <p className="my-5 lg:my-10 font-thin lg:w-2/5  lg:bg-black lg:bg-opacity-10 bg-repeat-round lg:p-2 rounded">
          An online video editing platform is a versatile digital tool
           that empowers users to craft, refine, and enhance videos
           without the need for advanced technical skills or complex
           software installations.
        </p>
        <Link to="/video-edit-page">
          <button className="z-[1] cursor-pointer relative inline-flex items-center justify-center p-4  py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white cursor-pointer flex items-center gap-3">
              Edit Now <AiOutlineDoubleRight />
            </span>
          </button>
        </Link>
      </div>
      <div className="">
        <video
          loop
          autoPlay
          playsInline
          muted
          className="w-full h-full"
          src="https://assets-static.invideo.io/files/Powerful_Video_Editing_a2305fc88d.mp4"
          type="video/mp4"
        ></video>
      </div>

      <div className="flex gap-5 lg:gap-10 lg:ml-10 absolute bottom-5  text-base md:text-lg lg:text-[22px] font-semibold  sm:-mt-6  md:-mt-4 lg:mt-0">
        <Link className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Trim</Link>
        <Link className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Crop</Link>
        <Link className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Transitions</Link>
        <Link className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Text</Link>
        <Link className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Stickers</Link>
      </div>
    </div>
  );
};

export default Banner;
