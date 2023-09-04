import React from 'react';
import { Link } from 'react-router-dom';
import './errorpage.css';
import './vendor.css';
import four from '../../../assets/error/four.png';
import zero from '../../../assets/error/zero.png';
import four1 from '../../../assets/error/four1.png';

const ErrorComponent = () => {
    return (
        <div className="wrapper">
            <div classNameName="main" >
                <div className="notpage">
                    <div className="container">
                        <div className="notpage__wrapper">
                            <div className="bubbles">
                                <div className="bubble bubble-one"></div>
                                <div className="bubble bubble-two"></div>
                                <div className="bubble bubble-three"></div>
                                <div className="bubble bubble-four"></div>
                                <div className="bubble bubble-five"></div>
                                <div className="bubble bubble-six"></div>
                            </div>
                            <div className="notpage__wrapper-img">
                                <img src={four} alt=""/>
                                    <img src={zero} alt=""/>
                                         <img src={four1} alt=""/></div>
                                        <div className="notpage__wrapper-data">
                                       
                                            <div   className='title animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black'>Opps! Page not found</div>
                                            <Link
                                                to='/'
                                                className='px-8 py-3 font-semibold rounded bg-gradient-to-r from-indigo-500 to-blue-500 text-gray-100'
                                            >
                                               Back to homepage  
                                            </Link>
                           
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
        </div>

);
};

export default ErrorComponent;