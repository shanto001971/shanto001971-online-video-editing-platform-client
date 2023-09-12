import React from 'react';
import life from '../../../../assets/mission_img/life.svg'
import mission from '../../../../assets/mission_img/mission-vision.svg'
const MissionVission = () => {
    return (
        <div className='my-4 md:my-9 lg:my-11  
        '>
           <div className=' flex justify-start pt-4 gap-8 mx-5 md:mx-10 lg:px-36 '>
            
           <img src={mission} alt="" className='h- w-[47px] h-[35px]' />
            <span><p className=' text-2xl lg:text-4xl font-semibold'>Our mission and vision</p>
       
       <p className='text-lg lg:text-xl font-medium md:max-w-[696px] lg:max-w-[906px] '>We’re on a mission to empower everyone to make an impact on their world through creative expression. If this excites you, we can’t wait to meet you!</p></span>
            </div> 
            
           <div className=' flex justify-start gap-8 py-9 mx-5 md:mx-10 lg:px-36 '>
            
           <img src={life} alt="" className='w-[47px] h-[35px]' />
            <span><p className=' text-2xl lg:text-4xl font-semibold'>Life at MotionMingle</p>
       
       <p className='text-lg lg:text-xl font-medium md:max-w-[696px] lg:max-w-[906px]'>We’re a mission-driven, hardworking bunch inspired to think big. We’re dedicated to our customers, never satisfied with the status quo, and (last but not least) we’re kind and considerate humans, too!</p></span>
            </div> 
        </div>
    );
};

export default MissionVission;