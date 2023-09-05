import bannerImg from '../../../../assets/learn/Educational/banner.png'

const LearnEducationalBanner = () => {
    return (
        <div className="md:flex md:w-[1/2] justify-center items-center gap-8">
            <div>
                <h1 className='text-6xl font-extrabold'>Educational Video Maker</h1>
                <p className='text-base'>Easy and free video creation software for schools</p>
                <button className='btn btn-md'>Choose Videos</button>
            </div>
            <div className='md:w-[1/2]'>
                <img  src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default LearnEducationalBanner;