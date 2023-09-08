import React from 'react';
import { Link } from 'react-router-dom';

const HelpButton = () => {
    return (
        
          <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="text-slate-500 font-medium m-1">Help</label>
  <div tabIndex={0} className="dropdown-content z-[1] menu p-6 -ml-2 w-[280px] md:w-[360px] shadow-lg shadow-slate-500 bg-base-100 rounded-box">
<div className='flex gap-7 space-y-5 md:space-y-8 text-sm'>
<div>
    <p className='text-slate-700'>Support</p>
   <p>Contact Support</p>
  <Link to='emailUs'>Email Us</Link>
  <p>Tutorials</p>
    
</div>
<div  style={{marginTop:'0px'}}>
  <p className='text-slate-700'>Learn</p>  
  <p>YouTube Channel</p>
    <p>Instagram Inspiration</p>
    <p>Blogs</p>
</div>
</div>
  </div>
</div>  
       
    );
};

export default HelpButton;