import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {

    return (
    <>
    <footer className=" footer p-4 md:p-10 bg-neutral text-neutral-content" style={{rowGap:'0px'}} >
  <div className='flex   items-center md:items-start md:flex-col'>
<div><p className='text-4xl'>MotionMingle Express</p>    <p className='w-48 mb-5 md:mb-0'>Free all-in-one video editor for everyone to create anything anywhere
</p></div>
   
    <div className="grid grid-flow-col gap-4 ">
    <a href="https://www.twitter.com" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a href="https://www.youtube.com" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a href="https://www.facebook.com/" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
     </div> 
  <div className='hidden md:inline-grid'>
    <span className="footer-title">Tools</span> 
    <a className="link link-hover">online-video-editor</a> 
    <a className="link link-hover">text-to-speech</a> 
    <a className="link link-hover">Video effects & filters</a> 
    <a className="link link-hover">Auto subtitles generator</a>
    <a className="link link-hover">Image style transfer</a>
    <a className="link link-hover">Video background remover</a>
  </div> 
  <div className='hidden md:inline-grid'>
    <span className="footer-title">Create</span> 
    <a className="link link-hover">TikTok video maker</a> 
    <a className="link link-hover">YouTube video maker</a> 
    <a className="link link-hover">Instagram video maker</a> 
    <a className="link link-hover">GIF maker</a>
    <a className="link link-hover">Become a creator</a>
  </div> 
  <div className='hidden md:inline-grid'>
    <span className="footer-title">Resources</span> 
    <a className="link link-hover">How to add subtitles to video</a> 
    <a className="link link-hover">Create makeup video</a> 
    <a className="link link-hover">Create cooking video</a>
    <a className="link link-hover">Create cooking video</a>
    <a className="link link-hover">Create exercise video</a>
    <a className="link link-hover">Make Youtube video</a>
    <a className="link link-hover">Make short video</a>
  </div>
 
<div className="collapse collapse-arrow md:hidden">
  <input type="radio" name="my-accordion-2"  style={{marginBottom:'0px'}}/> 
  <div className="collapse-title text-xl font-medium ">
  Tools  </div>
  <div className="collapse-content" > 

  <p className="link link-hover">online-video-editor</p> 
    <p className="link link-hover">text-to-speech</p> 
    <p className="link link-hover">Video effects & filters</p> 
    <p className="link link-hover">Auto subtitles generator</p>
    <p className="link link-hover">Image style transfer</p>
    <p className="link link-hover">Video background remover</p>
  </div>
</div>
<div className="collapse collapse-arrow md:hidden">
  <input type="radio" name="my-accordion-2"  style={{marginBottom:'0px'}} /> 
  <div className="collapse-title text-xl font-medium">
  Create  </div>
  <div className="collapse-content inline-grid"> 

  <a className="link link-hover">TikTok video maker</a> 
    <a className="link link-hover">YouTube video maker</a> 
    <a className="link link-hover">Instagram video maker</a> 
    <a className="link link-hover">GIF maker</a>
    <a className="link link-hover">Become a creator</a>  </div>
</div>
<div className="collapse collapse-arrow md:hidden">
  <input type="radio" name="my-accordion-2"  style={{marginBottom:'0px'}}/> 
  <div className="collapse-title text-xl font-medium" >
  Resources  </div>
  <div className="collapse-content inline-grid" style={{padding:'0px'}}> 

  <a className="link link-hover">How to add subtitles to video</a> 
    <a className="link link-hover">Create makeup video</a> 
    <a className="link link-hover">Create cooking video</a>
    <a className="link link-hover">Create cooking video</a>
    <a className="link link-hover">Create exercise video</a>
    <a className="link link-hover">Make Youtube video</a>
    <a className="link link-hover">Make short video</a>  </div>
</div>
</footer>
    <footer className=" footer px-10 py-4 border-t bg-neutral text-neutral-content border-base-300">
  
  <div className="md:place-self-center md:justify-self-center">
  <p>Copyright © 2023 - All right reserved by MitionMingle Express</p>

  </div>
</footer>

    </>
    );
};

export default Footer;