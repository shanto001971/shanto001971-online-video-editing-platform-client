import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import { useRef, useState } from "react";
import { BsPlay, BsPause, BsEmojiHeartEyes } from 'react-icons/bs';
import { DiHtml53DEffects } from 'react-icons/Di';
import { GoVideo } from 'react-icons/go';
import { MdOutlineAudiotrack } from 'react-icons/md';
import { PiTextAaBold } from 'react-icons/pi';
import { AiOutlinePlusSquare } from 'react-icons/ai';



const VideoPlayer = () => {
    const videoSource = "https://www.youtube.com/watch?v=61floBUAiTY&list=RDGMEM916WJxafRUGgOvd6dVJkeQVM61floBUAiTY&start_radio=1";
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgress = (progressState) => {
        // console.log(progressState)
        setProgress(progressState.played * 100);
    };

    return (
        <div>
            <div className="w-full">
                <div className="pt-10 bg-black  rounded-t-lg">
                    <div>
                        {/* <video
                            ref={videoRef}
                            src={videoSource}
                            onTimeUpdate={handleTimeUpdate}
                        /> */}
                        {/* <ReactPlayer ref={videoRef}
                            // src={videoSource}
                            onTimeUpdate={handleTimeUpdate}
                             url={videoUrl} controls /> */}
                        <ReactPlayer
                            url={videoSource}
                            playing={isPlaying}
                            onProgress={handleProgress}
                            controls // Add controls to show player controls
                        />
                    </div>
                </div>
                <div className="bg-black p-2 rounded-b-lg">
                    <button className=" w-10 h-8 " onClick={togglePlay}>
                        {isPlaying ? <BsPause className="text-white" /> : <BsPlay className="text-white" />}

                    </button>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <div className="mt-2 flex">
                    <div className="bg-indigo-500 h-10 w-32 rounded-lg flex items-center gap-2 p-2 text-slate-300">
                        <DiHtml53DEffects className="w-5" />
                        <p>Effects</p>
                    </div>
                    <div className="bg-green-400 h-10 w-32 rounded-lg flex items-center gap-2 p-2 ">
                        <GoVideo />
                        <p>Video</p>
                    </div>
                    <div className="bg-red-400 h-10 w-32 rounded-lg flex items-center gap-2 p-2">
                        <BsEmojiHeartEyes />
                        <p>Emoji</p>
                    </div>
                    <div className="bg-blue-500 h-10 w-32 rounded-lg flex items-center gap-2 p-2 ">
                        <MdOutlineAudiotrack />
                        <p>Audio</p>
                    </div>
                    <div className="bg-amber-300 h-10 w-32 rounded-lg flex items-center gap-2 p-2">
                        <PiTextAaBold />
                        <p>Text</p>
                    </div>
                </div>

                <div className=" bg-black mt-2 flex items-center gap-1 p-2 rounded-lg">
                        <img className="w-20 h-20" src="https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX" alt="" />
                        <AiOutlinePlusSquare className="text-white"/>
                        <img className="w-20 h-20" src="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg" alt="" />
                        <AiOutlinePlusSquare className="text-white"/>
                        <img className="w-20 h-20" src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                        <AiOutlinePlusSquare className="text-white"/>
                        <img className="w-20 h-20" src="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png" alt="" />
                        <AiOutlinePlusSquare className="text-white"/>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;