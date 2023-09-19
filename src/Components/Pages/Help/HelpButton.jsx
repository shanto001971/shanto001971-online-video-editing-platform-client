import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeProvider/ThemeProvider';

const HelpButton = () => {
  const { changesThemeTextColor } = useTheme(); // for using light and dark themes
  const email = 'minglemotion@gmail.com';
  const subject = '';
  const body = '';

  // Encode the subject and body for the mailto link
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Create the mailto link with the email, subject, and body
  const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    return (
        
          <div className={`dropdown dropdown-hover ${changesThemeTextColor()}`}>
  <label tabIndex={0} className="font-medium m-1">Help</label>
  <div tabIndex={0} className="dropdown-content z-[1] menu p-6 -ml-2 w-[280px] md:w-[360px] shadow-lg shadow-slate-500 bg-base-100 rounded-box">
<div className='flex gap-7 space-y-5 md:space-y-8 text-sm'>
<div>
    <p className='text-slate-700 mb-2'>Support</p>
   <p>Contact Support</p>
  <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
      Email Us
    </a>
<p>  <Link to='work-with-us'>Join Us</Link>
</p>    
</div>
<div  style={{marginTop:'0px'}}>
  <p className='text-slate-700 mb-2'>Learn</p>  
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