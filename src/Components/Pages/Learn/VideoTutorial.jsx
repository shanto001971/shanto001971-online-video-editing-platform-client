import tutorialImg from '../../../assets/learn/tutorial.png';

const VideoTutorial = ({title}) => {
    return (
        <div className='my-20'>
            <h2 className="text-4xl font-semibold mb-10">{title}</h2>
            <img className='md:w-[768px] mx-auto cursor-pointer' src={tutorialImg} alt="" />
        </div>
    );
};

export default VideoTutorial;