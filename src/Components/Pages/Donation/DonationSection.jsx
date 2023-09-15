import "./DonationSection.css";
import "./Font.css";
import img from "../../../../src/assets/images/welcome-one-img-1.b0c9c53d.jpg";
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect } from "react";
import { useState } from "react";
import arrow from "../../../../src/assets/images/arrow-right-solid (1).svg";
import curve from "../../../../src/assets/images/curveline.png";


const DonationSection = () => {
    const percentage = 35;
    const [count, setCount] = useState(0);

    // Function to handle hover and start counting
    const handleHover = (targetValue) => {
        let currentCount = count;
        const duration = 1000; // Animation duration in milliseconds
        const step = Math.ceil(targetValue / (duration / 16)); // Calculate step count based on duration

        const interval = setInterval(() => {
            currentCount += step;
            if (currentCount >= targetValue) {
                currentCount = targetValue;
            }
            setCount(currentCount);
        }, 16); // 60 FPS
    };

    return (
        <div >
            <div className="BackG">
                <div className="flex">
                    <div>
                        <p className="stylish-text ml-44 mt-32 mb-6 text-6xl text-white">Helping Them Today</p>
                        <div className="text-container ml-44">
                            <p className="font-serif text-white text-9xl">Help the <br /> <span className="curve-text">poor</span> in Need</p>
                            <img src={curve} alt="" className="curve-img" />
                        </div>
                        <button className="btn ml-44 mt-8" style={{ width: "200px", height: "80px" }}>
                            <span className="btn-content">
                                <img src={arrow} alt="" />
                                Learn More
                            </span>
                        </button>
                    </div>
                </div>


                <div className="bottom-right-info">
                    <div className="volenters" onMouseEnter={() => handleHover(4490)}>
                        <h3>
                            <span className="font-bold text-3xl ">{count}</span>
                            <br /> <span className="font-semibold">Volunteers are <br /> Available</span>
                        </h3>
                    </div>
                    <div className="volenters" onMouseEnter={() => handleHover(8900)}>
                        <h3>
                            <span className="font-bold text-3xl ">{count}</span>
                            <br /> <span className="font-semibold">Funds Raised by <br /> People</span>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="flex gap-14 mt-10 mb-10 p-20"> <img src={img} alt="" />
                <div className="mt-14">
                    <h3 className="font-bold text-xl relative">
                        <span className="green-line ml-16 "></span>
                        <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Welcome to Charity </span>
                    </h3>

                    <h3 className="font-bold text-3xl text-blue-400">Helping each other <br /> can make world better</h3>
                    <p className="font-semibold mt-5">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed dot ut labore et simply free text dolore </p>

                    <div className="flex gap-5 mt-7">
                        <div>
                            <h3 className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex gap-3">  <img src={arrow} width={"15px"} alt="" /> Our Mission</h3>
                            <p className="font-semibold">Lorem ipsum dolor sit amet not is consectetur notted.</p></div>
                        <div>
                            <h3 className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex gap-3"> <img src={arrow} width={"15px"} alt="" />Our Story</h3>
                            <p className="font-semibold">Lorem ipsum dolor sit amet not is consectetur notted.</p>
                        </div>
                    </div>

                    <h3 className="font-bold mt-7">Charity</h3>
                    <progress className="progress progress-success w-2.56" value="70" max="100"></progress>
                    <h3 className="font-bold mt-5">Donations</h3>
                    <progress className="progress progress-success w-2.56" value="33" max="100"></progress>

                </div>
            </div>
            <div className="grid grid-cols-2 mb-10 p-10">
                <div>
                    <p className="font-bold text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Support Us</p>
                    <h3 className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl">We Need Your Help</h3>
                    <p className="font-semibold mt-5">The Weekend School of the Islamic Center of Allah is committed <br /> to providing quality Islamic Education according to the Quran. </p>
                    <button className="btn btn-secondary mt-4"><Link to={"/donate"}>Donate Now</Link></button>
                </div>
                <div className="grid grid-cols-3 ">
                    <div className="grid">
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={{
                                // Customize the root svg element
                                root: { width: '100px', },

                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#d6d6d6',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '#f88',
                                    // Text size
                                    fontSize: '16px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '#3e98c7',
                                },
                            }}
                        />
                        <span className="font-bold" style={{ marginLeft: '10px' }}>Mosque</span>
                    </div>
                    <div className="grid">
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={{
                                // Customize the root svg element
                                root: { width: '100px', },

                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#d6d6d6',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '#f88',
                                    // Text size
                                    fontSize: '20px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '#3e98c7',
                                },
                            }}
                        />
                        <span className="font-bold" style={{ marginLeft: '10px' }}>Feed Hungry</span>
                    </div>
                    <div className="grid">
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={{
                                // Customize the root svg element
                                root: { width: '100px', },

                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#d6d6d6',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '#f88',
                                    // Text size
                                    fontSize: '16px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '#3e98c7',
                                },
                            }}
                        />
                        <span className="font-bold" style={{ marginLeft: '10px' }}>Expenses</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DonationSection;