import React from 'react';

import { Disclosure } from '@headlessui/react'
import { BsChevronUp } from 'react-icons/bs'
const FAQs = () => {
    return (
        <div className="w-full px-4 pt-1">
      <div className="mx-auto w-full sm:max-w-[345px] md:max-w-[695px] rounded-2xl bg-white p-2">
      <h1 className='text-3xl font-bold leading-none text-center sm:text-4xl mb-3 md:mb-8'>
        Frequently asked questions
        </h1>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-lg font-medium text-gray-500 hover:text-indigo-600  focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>What does the interview process look like?</span>
                <BsChevronUp
                  className={`${
                    open ? 'rotate-180 transform ' : ''
                  } h-5 w-5 mt-1 text-violet-500 transition-transform duration-300 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-gray-600">
              In the first step, you can expect a MotionMingle recruiter to give you a call which is designed to determine whether we’re a mutual fit. It’s an opportunity to learn more about MotionMingle, as well as highlight your experience and achievements and how they are best suited to the role. <br />

For engineering candidates, our next step is an online technical interview, giving you a chance to chat with one of our developers while working through a coding exercise. For roles outside of engineering, we provide a position-specific challenge for you to tackle in your own time. The challenge is designed to be a realistic glimpse into the sort of work you’ll be doing at MotionMingle.  <br />

The final stage involves video or onsite interviews which serve as an opportunity to get to know your potential team as well as get a feel for our culture. At this point, we hope you’ll be excited to join us in our journey as we create a truly incredible video platform.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="divider mx-5 bg-indigo-200" style={{height:'1px'}}></div>

       
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-lg font-medium text-gray-500 hover:text-indigo-600  focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>How can I prepare for engineering interviews?
</span>
                <BsChevronUp
                  className={`${
                    open ? 'rotate-180 transform ' : ''
                  } h-5 w-5 mt-1 text-violet-500 transition-transform duration-300 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-gray-600">
              Your first interview is an opportunity for you to learn more about us and for us to get an understanding of your technical background. During this interview, you’ll be required to write working code in the programming language(s) appropriate to the role.  <br />

In the next steps, you’ll be asked to work through a technical challenge with an interviewer, either online or in-person. If you’d like to prepare, our best suggestion is to refresh your computer science principles, with a focus on performance, concurrency, and scalability. <br />

The goal is to understand your problem solving ability and knowledge of trade-offs when building software and how that aligns with the exciting challenges our engineers tackle on the daily. 
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="divider  mx-5 bg-indigo-200" style={{height:'1px'}}></div>
        
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-lg font-medium text-gray-500 hover:text-indigo-600  focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>How much experience do I need to qualify for an internship?</span>
                <BsChevronUp
                  className={`${
                    open ? 'rotate-180 transform ' : ''
                  } h-5 w-5 mt-1 text-violet-500 transition-transform duration-300 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base font-normal text-gray-600">
              We’re on the lookout for students and recent graduates that possess a demonstrated interest in their chosen field. <br />

You must be hungry to learn and grow within a fast-paced startup environment regardless of commercial work experience. You can apply for internships in Engineering, Design and HR, which are structured in a way that allows you to work part-time as you manage a full (or partial) course load.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="divider  mx-5 bg-indigo-200" style={{height:'1px'}}></div>
      </div>
     
    </div>
    );
};

export default FAQs;