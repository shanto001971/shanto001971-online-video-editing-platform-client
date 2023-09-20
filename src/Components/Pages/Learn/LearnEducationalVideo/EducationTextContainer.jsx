import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const EducationTextContainer = () => {
    const { theme } = useTheme(); //using for dark and light theme

    return (
        <div className={`my-12 md:my-28 rounded-xl p-8 md:p-12 ${theme.mode === "dark" ? 'text-gray-100 bg-gray-800' : "text-gray-600 bg-gray-100 "}`}>
           <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">Create videos for teaching. Online, free</h2> 
           <div className="md:flex items-start gap-6 mt-4 text-base text-center md:text-left leading-7">
            <div className="text-sm md:text-base md:w-[1/2]">
            Are you looking for a new way to engage your students and make them love learning even more? One of the best materials you can provide that inform and engage students is an educational video. Using Mingle Motion free video editor, you can create educational and informational videos in minutes. Create your teaching materials straight from your browser. You don’t even need to install an app.
            </div>
            <div className="text-sm md:text-base mt-3 md:mt-0 md:w-[1/2]">
            You can record yourself in front of a whiteboard or blackboard, or record your screen and webcam for instructional videos on a desktop. Mingle Motion screen and webcam recorder let you draw over your screen while recording, making it easy for you to point out important points in your educational media.
            </div>
           </div>
        </div>
    );
};

export default EducationTextContainer;