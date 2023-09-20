import img from "../../../../public/Team.png";
import video from "../../../../public/Fluid_Animations_86db7504d9.mp4";
import { useTheme } from "../../ThemeProvider/ThemeProvider";

const VideoLayout = () => {
	const {
		theme,
		changesThemeBgColor
	  } = useTheme();

  return (
    <div className="md:flex gap-8 my-10">
      <div className={`md:w-auto border p-8  mb-5 md:mb-0 rounded-3xl ${theme.mode === 'dark' ? 'text-white' : 'text-black'} ${changesThemeBgColor()}`}>
        <h2 className="text-3xl font-bold">
          Add your team and collaborate on your video
        </h2>
        <img className="my-16" src={img} alt="" />
        <h6 className="text-base md:text-lg font-medium">
          Create, edit, comment, and share your videos together with your team
          members.
        </h6>
      </div>

      <div className="border h-auto bg-[#A3F3FF] rounded-3xl">
        <h2 className="text-3xl text-black font-bold py-10">Attractive Animations</h2>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="md:h-[300px] w-[100vw]"
        >
          <source className="w-full" src={video} type="video/mp4" />
        </video>
        <ul className="flex gap-x-3 text-lg md:text-[22px] font-semibold py-10 pl-5 md:pl-10">
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Slide</span>
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Blur</span>
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Bounce</span>
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Spin</span>
          <span className="text-gray-500 hover:text-gray-950 transition-colors ease-in-out delay-200">Disco</span>
        </ul>
      </div>
    </div>
  );
};

export default VideoLayout;
