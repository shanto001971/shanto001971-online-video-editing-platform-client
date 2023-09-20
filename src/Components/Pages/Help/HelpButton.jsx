import React from 'react';

const HelpButton = () => {
  
  const email = 'minglemotion@gmail.com';
  const subject = '';
  const body = '';

  // Encode the subject and body for the mailto link
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Create the mailto link with the email, subject, and body
  const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    return (
        
     <div className='nav-link'>
       <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
      Contact Us
    </a>
     </div>
       
    );
};

export default HelpButton;