import './PricingTab.css';
import './Pricing.css';

import { useState } from "react";

const PricingTab = () => {
    const [activeTab, setActiveTab] = useState(2); // Assuming "Tab 2" is initially active

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    return (
        <div className="center-container">
            <div className="tabs">
                <a
                    className={`tab tab-bordered ${activeTab === 1 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    <span className='font-semibold'> Monthly</span>
                </a>
                <a
                    className={`tab tab-bordered ${activeTab === 2 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(2)}
                >
                    <div className='flex gap-2'> <span className='font-semibold'>Yearly</span>  <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent font-normal'>Save 50%</span></div>
                </a>

            </div>

            <div className="tab-content">
                {activeTab === 1 && (
                    <div className='grid md:grid-cols-3 gap-8 cursor-pointer'>
                        <div className='first-c '>
                            <div className='p-7'> <h2 className='font-bold text-xl text-start'>Free</h2>
                                <p className='font-semibold'>For anyone who wishes to try <br /> InVideo editor</p>
                                <h2 className='font-bold text-4xl text-start'>$0</h2>
                                <div className='bgP text-white mt-6 flex justify-center mx-auto items-center '>Get lifetime plan</div></div>
                            <div className='second-c p-7'>
                                <div className='mt-7'>
                                    <p > 6000+ Video Templates</p>
                                    <p>3M+ Standard Media Library</p>
                                    <p>AI Script Generator</p>
                                    <p> Text to Speech</p>
                                    <p>Collaborate with Team</p>
                                </div>
                            </div>
                        </div>
                        <div className='first-cc '>

                            <div className='p-7 '>
                                <div className='relative'> <p className='corneL '>Limited offer</p></div>
                                <h2 className='font-bold text-xl text-start'>Business</h2>
                                <p className='font-semibold'>For small business,<br /> educators and influencers</p>
                                <h2 className='font-bold text-4xl text-start'>$30 <span className='font-semibold text-sm'>/ mo*</span></h2>
                                <div className='bgPP text-white mt-6 flex justify-center mx-auto items-center '>Get Business</div></div>
                            <div className='second-c p-7'>
                                <div className='mt-7'>
                                    <p > No Watermark on Videos</p>
                                    <p>60 HD Video Exports / mo</p>
                                    <p>10 iStock Media / mo</p>
                                    <p> 1M+ Premium Media</p>
                                    <p> 20 Remove Background / mo</p>
                                </div>
                            </div>
                        </div>
                        <div className='first-c '>
                            <div className='p-7'> <h2 className='font-bold text-xl text-start'>Unlimited</h2>
                                <p className='font-semibold'>For agencies and larger<br /> teams</p>
                                <h2 className='font-bold text-4xl text-start'>$40 <span className='font-semibold text-sm'>/ mo*</span></h2>
                                <div className='bgPPP text-white mt-6 flex justify-center mx-auto items-center '>Get Unlimited</div></div>
                            <div className='second-c p-7'>
                                <div className='mt-7'>
                                    <p > 6000+ Video Templates</p>
                                    <p>3M+ Standard Media Library</p>
                                    <p>AI Script Generator</p>
                                    <p> Text to Speech</p>
                                    <p>Collaborate with Team</p>
                                </div>
                            </div>
                        </div>


                    </div>
                )}
                {activeTab === 2 && (
                    <div className='grid grid-cols-3 gap-8'>
                        <div className='first-c '>
                            <div className='p-7'> <h2 className='font-bold text-xl text-start'>Free</h2>
                                <p className='font-semibold'>For anyone who wishes to try <br /> InVideo editor</p>
                                <h2 className='font-bold text-4xl text-start'>$0</h2>
                                <div className='bgP text-white mt-6 flex justify-center mx-auto items-center '>Get lifetime plan</div></div>
                            <div className='second-c p-7'>
                                <div className='mt-7'>
                                    <p > 6000+ Video Templates</p>
                                    <p>3M+ Standard Media Library</p>
                                    <p>AI Script Generator</p>
                                    <p> Text to Speech</p>
                                    <p>Collaborate with Team</p>
                                </div>
                            </div>
                        </div>
                        <div className='first-cc '>

                            <div className='p-7 '>
                                <div className='relative'> <p className='corneL '>Limited offer</p></div>
                                <h2 className='font-bold text-xl text-start'>Business</h2>
                                <p className='font-semibold'>For small business,<br /> educators and influencers</p>
                                <h2 className='font-bold text-4xl text-start'>$15 <span className='font-semibold text-sm'>/ mo*</span></h2>
                                <div className='bgPP text-white mt-6 flex justify-center mx-auto items-center '>Get Business</div></div>
                            <div className='second-c p-7'>
                                <div className='mt-7'>
                                    <p > No Watermark on Videos</p>
                                    <p>60 HD Video Exports / mo</p>
                                    <p>10 iStock Media / mo</p>
                                    <p> 1M+ Premium Media</p>
                                    <p> 20 Remove Background / mo</p>
                                </div>
                            </div>
                        </div>
                        <div className='first-c '>
                            <div className='p-7'> <h2 className='font-bold text-xl text-start'>Unlimited</h2>
                                <p className='font-semibold'>For agencies and larger<br /> teams</p>
                                <h2 className='font-bold text-4xl text-start'>$30 <span className='font-semibold text-sm'>/ mo*</span></h2>
                                <div className='bgPPP text-white mt-6 flex justify-center mx-auto items-center '>Get Unlimited</div></div>
                            <div className='second-c p-7'>
                                <div className='mt-7'>
                                    <p > 6000+ Video Templates</p>
                                    <p>3M+ Standard Media Library</p>
                                    <p>AI Script Generator</p>
                                    <p> Text to Speech</p>
                                    <p>Collaborate with Team</p>
                                </div>
                            </div>
                        </div>


                    </div>
                )}

            </div>
        </div>
    );
};

export default PricingTab;