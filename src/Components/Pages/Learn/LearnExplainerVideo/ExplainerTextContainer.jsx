import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const ExplainerTextContainer = () => {
    const { theme } = useTheme(); //using for dark and light theme
    
    return (
        <div className={`my-12 md:my-28 rounded-xl p-8 md:p-12 ${theme.mode === "dark" ? 'text-gray-100 bg-gray-800' : "text-gray-600 bg-gray-100 "}`}>
           <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">Get your message across with dynamic video explainers</h2> 
           <div className="md:flex items-start gap-6 mt-4 text-base text-center md:text-left leading-7">
            <div className="text-sm md:text-base md:w-[1/2]">
            Simplify complex concepts into bite-sized, engaging video content using VEED’s professional video editor. Effortlessly turn your ideas into infographics with animation using our customizable assets—animated stickers, shapes, annotations, GIFs, and CTA popups. Add music tracks, sound effects, and animated stock videos from our royalty-free stock library.
            </div>
            <div className="text-sm md:text-base mt-3 md:mt-0 md:w-[1/2]">
            You can even use an AI avatar to present information in your videos! Our intuitive, drag-and-drop interface offers a seamless experience, allowing you to craft professional videos minus the learning curve. From startups to established enterprises, our video maker is the best tool for sharing ideas that resonate.
            </div>
           </div>
        </div>
    );
};

export default ExplainerTextContainer;