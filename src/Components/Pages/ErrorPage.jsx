
import React from 'react';
import { Link } from 'react-router-dom';
import animation from '../../assets/error-animation.json';
import Lottie from 'react-lottie';

const ErrorPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className="error-container bg-gradient-to-r from-cyan-300 to-blue-300 h-screen flex justify-center items-center">
      <div className="error-content text-center">
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <Lottie options={defaultOptions}
      height={400}
      
     />               
 
         
          
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100 max-w-md text-center'
          >
            Back to homepage
          </Link>
          
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;