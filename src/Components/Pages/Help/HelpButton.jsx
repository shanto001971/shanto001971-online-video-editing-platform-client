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

    <div className='nav-link'>
      <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
        Contact Us
      </a>
    </div>

  );
};

export default HelpButton;