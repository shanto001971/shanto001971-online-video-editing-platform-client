import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import { useRef, useState } from "react";
import { BsPlay, BsPause, BsEmojiHeartEyes, BsPlusCircleDotted, BsVolumeMute, BsVolumeUp } from 'react-icons/bs';
import { DiHtml53DEffects } from 'react-icons/Di';
import { GoVideo } from 'react-icons/go';
import { MdOutlineAudiotrack } from 'react-icons/md';
import { PiMessengerLogo, PiTextAaBold } from 'react-icons/pi';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { GoFileMedia } from 'react-icons/go';
import { FiLayers } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';
import { FiMusic } from 'react-icons/fi';
import { BsFullscreen } from 'react-icons/bs';
import screenfull from 'screenfull';



const VideoPlayer = () => {
    const videoSource = "https://v4.cdnpk.net/videvo_files/video/free/video0466/large_watermarked/_import_61490450321f37.49858282_FPpreview.mp4";
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);
    const playerRef = useRef(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgress = (progressState) => {
        // console.log(progressState)
        setProgress(progressState.played * 100);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };
    const handleVolumeChange = (value) => {
        setVolume(value);
        setIsMuted(false); // Unmute if volume is adjusted
    };

    const handleProgressVolume = (progress) => {
        setProgress(progress.played * 100);
    };

    const toggleFullScreen = () => {
        if (playerRef.current && screenfull.isEnabled) {
            screenfull.toggle(playerRef.current.wrapper);
        }
    };

    return (
        <div className="lg:flex gap-1 ">

            <div className="w-full">
                <div className="pt-10 bg-black rounded-t-lg">
                    <div>
                        <ReactPlayer
                            ref={playerRef}
                            url={videoSource}
                            playing={isPlaying}
                            volume={volume}
                            muted={isMuted}
                            onProgress={handleProgress}
                            controls
                        />
                    </div>
                </div>
                <div className="bg-black p-2 rounded-b-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <button className="w-10 h-8" onClick={togglePlay}>
                                {isPlaying ? <BsPause className="text-white" /> : <BsPlay className="text-white" />}
                            </button>
                            <button className="w-10 h-8" onClick={toggleMute}>
                                {isMuted ? <BsVolumeMute className="text-white" /> : <BsVolumeUp className="text-white" />}
                            </button>
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={volume}
                                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                                className="w-20"
                            />
                        </div>
                        <div className="">

                            <button className="w-10 h-8" onClick={toggleFullScreen}>
                                <BsFullscreen className="text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* <div className="mt-1 flex gap-5">
                    <div className="bg-indigo-500 hover:bg-indigo-600 h-10 w-28 rounded-t-lg flex items-center gap-2 p-2 text-slate-300">
                        <DiHtml53DEffects className="w-5" />
                        <p>Effects</p>
                    </div>
                    <div className="bg-green-400 hover:bg-green-500 h-10 w-28 rounded-t-lg flex items-center gap-2 p-2 ">
                        <GoVideo />
                        <p>Video</p>
                    </div>
                    <div className="bg-red-400 hover:bg-red-500 h-10 w-28 rounded-t-lg flex items-center gap-2 p-2">
                        <BsEmojiHeartEyes />
                        <p>Emoji</p>
                    </div>
                    <div className="bg-blue-500 hover:bg-blue-600 h-10 w-28 rounded-t-lg flex items-center gap-2 p-2 ">
                        <MdOutlineAudiotrack />
                        <p>Audio</p>
                    </div>
                    <div className="bg-amber-300 hover:bg-amber-400 h-10 w-28 rounded-t-lg flex items-center gap-2 p-2">
                        <PiTextAaBold />
                        <p>Text</p>
                    </div>
                </div> */}

                <div className="bg-black rounded-b- h-40">
                    <div className="   flex items-center gap-1 p-2 ">
                        <img className="w-20 h-20" src="https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX" alt="" />
                        <AiOutlinePlusSquare className="text-white" />
                        <img className="w-20 h-20" src="https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg" alt="" />
                        <AiOutlinePlusSquare className="text-white" />
                        <img className="w-20 h-20" src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                        <AiOutlinePlusSquare className="text-white" />
                        <img className="w-20 h-20" src="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png" alt="" />
                        <AiOutlinePlusSquare className="text-white" />
                    </div>
                    <div className="h-5 w-full flex px-2">
                        <img className="h-5 w-1/2 rounded-sm" src="https://ak6.picdn.net/shutterstock/videos/24231536/thumb/11.jpg" alt="" />
                        <AiOutlinePlusSquare className="text-white" />
                        <img className="h-5 w-1/2 rounded-sm" src="https://ak6.picdn.net/shutterstock/videos/24231536/thumb/11.jpg" alt="" />
                    </div>
                </div>
            </div>


            <div className="w-full  bg-black rounded-lg p-2">
                <div className="bg-slate-50 w-60 h-60 rounded-full mx-auto lg:mt-10 relative ">
                    <BsPlusCircleDotted className="absolute top-[42%] left-[43%] w-10 h-10 text-black" />
                    <div className="group text-black flex ">
                        <p className=" w-20 bg-gray-800 text-[8px] sm:text-[10px] font-bold pt-[14px] sm:pt-5 px-6 uppercase text-white hidden group-hover:block ease-out transition ">
                            Connect us
                        </p>
                        <GoFileMedia className="absolute top-8 left-[45%] h-10 w-10  ease-out transition-all " />
                    </div>

                    <FiLayers className="absolute top-[42%] left-8 h-10 w-10 text-black" />
                    <BiMicrophone className="absolute bottom-8 left-[43%] h-10 w-10 text-black" />
                    <FiMusic className="absolute top-[42%] right-8 h-10 w-10 text-black" />
                </div>
                <div className="">
                    <div className="text-center mt-5 mb-5">
                        <h1 className="text-2xl font-semibold text-white">Audio</h1>
                    </div>
                    <input type="range" name="" id="" className="w-1/2" />
                    <input type="range" name="" id="" className="w-1/2" />
                    <input type="range" name="" id="" className="w-1/2" />
                    <input type="range" name="" id="" className="w-1/2" />
                    <br />
                    <input type="range" min={0} max={100} defaultValue={10} name="" id="" className="w-full" />
                    <br />
                    <input type="range" name="" id="" className="w-full" />

                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;