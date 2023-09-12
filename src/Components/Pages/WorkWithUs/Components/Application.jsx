import React from 'react';

const Application = () => {
    return (
        <div className='max-w-[307px]md:max-w-[500px] text-center mx-3 md:mx-9 my-8 md:my-14 '>
              <h1 className='text-3xl font-medium leading-none py-2 '>
        General Application
        </h1>
        <p className='text-base font-medium py-2 '>Can't find a career you're looking for? We want to hear from you, <br /> please send your application by hitting the button below.</p>
        <button className="btn rounded-full text-white bg-violet-500 hover:bg-violet-600 group">
                  <p className="text-sm md:text-base">Send Application</p>
                </button>{" "}
        </div>
    );
};

export default Application;