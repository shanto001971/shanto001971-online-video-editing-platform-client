import { FaArrowRight } from 'react-icons/fa';
import sectionImg from '../../../../assets/learn/page-end.png'

const EducationLastSection = () => {
    return (
        <div className='mt-20 md:mt-32 lg:mt-52'>
            <div className='text-center'>
            <h4 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-8">More than an educational video maker</h4>
            <p className='text-sm md:text-base mb-8 leading-6'>Mingle Motion features so much more than just video creation for educational purposes. You will find plenty of premium tools to create professional-looking videos even if you don’t have any video editing experience. Our user interface is incredibly beginner-friendly. All it takes is just a few clicks. You can create videos for special occasions, greeting videos, graduation videos, and so much more! You don’t even need to download any software; it works straight from your browser.</p>
            <button className="btn btn-sm text-white md:min-w-[200px] md:h-[53px] bg-black hover:bg-gray-800 group">
                <p className='text-sm'>Choose Video</p>
                <FaArrowRight className="text-base md:text-lg group-hover:translate-x-[2px]" />
            </button>
            </div>
            <div className='mt-16'>
                <img src={sectionImg} alt="Section image" />
            </div>
        </div>
    );
};

export default EducationLastSection;