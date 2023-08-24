import img_8 from "../../../../assets/img_8.webp";
import img_9 from "../../../../assets/img_9.webp";
import img_10 from "../../../../assets/img_10.webp";
import img_11 from "../../../../assets/img_11.webp";
import background from "../../../../assets/background.webp";
import text from "../../../../assets/text.webp";
import speech from "../../../../assets/speech.webp";
import video from "../../../../assets/video.webp";
import { useState } from "react";
import { useEffect } from "react";
import FeatureHeading from "../FeatureHeading";
import Button from "../Button";
 
const EditFeaturesReverse = () => {
    const [selectedCollapse, setSelectedCollapse] = useState('speech');

  const handleCollapseChange = (collapseName) => {
    setSelectedCollapse(collapseName);
  };

  const getImageForCollapse = () => {
    switch (selectedCollapse) {
      case 'speech':
        return img_8;
      case 'text':
        return img_9;
      case 'video':
        return img_10;
      case 'background':
        return img_11;
      default:
        return img_8;
    }
  };
  useEffect(() => {
    const collapseNames = ['speech', 'text', 'video', 'background'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % collapseNames.length;
      handleCollapseChange(collapseNames[nextIndex]);
      currentIndex = nextIndex;
    }, 3000); // Change image and collapse every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className=" lg:py-12 px-5 md:px-20 bg-white">
      {/* for mobile  */}
       <div  className='md:hidden'>

<div className='max-w-screen-md m-3 tracking-wide'>

<img src={img_8} alt="" className='object-fill pt-3 md:pt-7' />
</div>
<div className='max-w-screen-md m-3  tracking-wide'>
<div className='flex justify-center gap-5 '>
    <span className='pt-3'> 
<img src={text} alt="" /></span>
<span >
    <p className='text-2xl font-bold'>
    Speech to Text

</p>
<p className='text-xl font-medium text-slate-600 py-2 '>
Use AI to automatically generate subtitles with near-perfect accuracy to make your video more accessible and compelling.

</p>
</span>
</div> 
<img src={img_9} alt="" className='object-fill pt-3 ' />
</div>
<div className='max-w-screen-md m-3 tracking-wide'>
<div className='flex justify-center gap-5 '>
    <span className='pt-3'> 
<img src={speech} alt="" /></span>
<span >
    <p className='text-2xl font-bold '>Text to Speech


</p>
<p className='text-xl font-medium text-slate-600 py-2 '>
Convert text files into natural voiceovers to make your video content more informative and captivating.

</p>
</span>
</div> 
<img src={img_10} alt="" className='object-fill pt-3 ' />
</div>
<div className='max-w-screen-md m-3  tracking-wide'>
<div className='flex justify-center gap-5 '>
    <span className='pt-3'> 
<img src={video} alt="" /></span>
<span >
    <p className='text-2xl font-bold'>Transcribe Video


</p>
<p className='text-xl font-medium text-slate-600 py-2 '>
Auto-transcribe video into text in different languages to make your video more searchable, accessible, and engaging.

</p>
</span>
</div> 
<img src={img_11} alt="" className='object-fill pt-3' />
<div className='flex justify-center gap-5 pt-3'>
    <span className='pt-3'> 
<img src={background} alt="" /></span>
<span >
    <p className='text-2xl font-bold '> Remove Background




</p>
<p className='text-xl font-medium text-slate-600 py-2 '>
Remove video background to isolate people from the scene of a video or an image, making it more authentic and accessible.


</p>
</span>
</div> 
</div>
  </div> 
      {/* Container Box */}
      <div className=" flex max-w-screen-xl items-center overflow-hidden bg-white lg:flex-row min-h-[700px]">
        {/* Image Container start*/}
        <div className=" lg:w-1/2 h-full hidden md:block">
          <img
          src={getImageForCollapse()}
          alt="pops"
            className=" w-full  lg:h-full"
          />
        </div>
       {/* image container end */}
        {/* details container start  */}
         <div className=" p-2 bg-white lg:p-11 lg:pl-10  lg:w-1/2 hidden md:block">
        <FeatureHeading heading="Restyle video with varied effects"></FeatureHeading>
         <div className=" md:h-[450px]">
         <div className="collapse">
          <input
            type='radio'
            name='my-accordion-1'
            checked={selectedCollapse === 'speech'}
            onChange={() => handleCollapseChange('speech')}
          />            <div className="collapse-title shadow-xl text-xl font-medium flex items-center gap-5 ">
              <img src={speech} alt="" className="h-6" />

              <p className="text-black"> Filters & Effects </p>
            </div>
            <div className="collapse-content font-medium text-slate-700  lg:pl-16 ">
              <p>
              Find the right look with preset video filters and effects. You can make your clips look better or match other footage in the project.  
              </p>
            </div>
          </div>

          <div className="collapse  ">
          <input
            type='radio'
            name='my-accordion-1'
            checked={selectedCollapse === 'text'}
            onChange={() => handleCollapseChange('text')}
          />            <div className="collapse-title  shadow-xl text-xl font-medium flex items-center gap-5 ">
              <img src={text} alt="" className="h-6" />

              <p className="text-black"> Text Overlays</p>
            </div>
            <div className="collapse-content font-medium text-slate-700 lg:pl-16 ">
              <p>
              Add text to video by choosing from varied templates to retain customer attention, highlight key actions, or boost brand identity.
              </p>
            </div>
          </div>

          <div className="collapse ">
          <input
            type='radio'
            name='my-accordion-1'
            checked={selectedCollapse === 'video'}
            onChange={() => handleCollapseChange('video')}
          />            <div className="collapse-title  shadow-xl text-xl font-medium flex items-center gap-5">
              <img src={video} alt="" className="h-6" />
              <p className="text-black"> Trendy Music</p>{" "}
            </div>
            <div className="collapse-content font-medium text-slate-700  lg:pl-16 ">
              <p>
              Restyle your clips with prevalent music to make the video immersive and engaging. The preset audio library is at your disposal.
              </p>
            </div>
          </div>
          
          <div className="collapse ">
          <input
            type='radio'
            name='my-accordion-1'
            checked={selectedCollapse === 'background'}
            onChange={() => handleCollapseChange('background')}
          />            <div className="collapse-title  shadow-xl text-xl font-medium flex items-center gap-5">
              <img src={background} alt="" className="h-6" />
              <p className="text-black"> Sound Effects </p>{" "}
            </div>
            <div className="collapse-content font-medium text-slate-700  lg:pl-16 ">
              <p>
              Liven up your video with dynamic sound effects. Apply the right sound effects to deliver information or engage the audience.
              </p>
            </div>
          </div>
         </div>
        <Button buttonText="Try for free"></Button>
        </div>
        {/* details container end */}
        
      
      </div>

    </div>
  );
};

export default EditFeaturesReverse;