import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


const Faq = () => {
  
    return (
        <div className="bg-[#F5F8FC] py-20 px-5 md:px-20">
           <div className="flex flex-col md:flex-row gap-10">
                <div className=" w-full md:w-1/3 text-left">
                    <h2 className="text-[42px] leading-snug text-black font-bold">Frequently <br /> Asked <br /> Questions</h2>
                </div>
                {/* accordion */}
                <div className=" w-full md:w-2/3">
                    <div>
                    <Accordion>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                     <span className='text-2xl text-black font-semibold'> What is the best free online video editor?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Motion Mingle online video editor is the right magic tool to edit video online free or make a video online for free. Try it for free to create Facebook video ads or just turn to a YouTube outro maker to grow your business. You can also create a video to share personal experiences on your social platforms, including YouTube and TikTok.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   <span className='text-2xl text-black font-semibold'> How can I edit a video like a Pro?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    How to edit video like a Pro? Does it mean you must have professional video editing software at hand? Absolutely not! Motion Mingle online editor enables you to edit video online for free, like a Pro, with its robust features and various effects. Be it converting text to speech or adding filters and effects to the video, Motion Minlge will be your first choice to help you engage the audience.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <span className='text-2xl text-black font-semibold'>Which video editor is best for beginners?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    If you are looking for a free video editor that requires no learning curve, Motion Mingle free online video editor will be the best choice. It allows for editing videos online, on a desktop or laptop, and even on your mobile. No learning curve. 100% trustworthy. Want a TikTok video editor? Motion Minlge has everything covered.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   <span className='text-2xl text-black font-semibold'> What is the best video editor with effects and music?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Want video effects and filters to restyle your video? Why not add music to video to make it more engaging and productive? Motion Mingle video editor online is the best online video editing tool to satisfy all your needs. Is Motion Mingle free online? Yes, you can enjoy endless templates and media assets without spending a dime. Start Motion Mingle online editing at one go. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Faq;


// react-accessible-accordion installed




 