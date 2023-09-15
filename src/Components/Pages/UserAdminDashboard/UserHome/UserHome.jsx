import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FaLayerGroup, FaPhotoVideo, FaRegCreditCard } from "react-icons/fa";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const UserHome = () => {
    const {user} = useContext(AuthContext);
    const [value, onChange] = useState(new Date());

    return (
        <div className="w-full h-full  px-6">
            <div className="text-2xl text-center py-10 font-bold text-black">Hi, {user.displayName}!</div>

{/* grid container */}
<h2 className="text-left text-black uppercase font-bold">my progress</h2>
      <div className="bg-[#2A2B47] rounded-xl">
        {/* first div */}
       <div className="grid grid-cols-2">

        <div className="p-5">
          <p className="text-xl text-white">Hi, {user.displayName}!</p>
          <p className="text-2xl text-white pt-5">You have completed 6 video <br /> editing this week</p>
         <div className="py-10"> <button className="text-black bg-white px-3 py-1 rounded-lg ">see all</button></div>
        </div>

        <div className="flex">
          <div className="bg-[#BFA8FF] m-8 rounded-lg text-black p-3">
           <p>01</p>
           <div className="py-5">
          <span className="text-2xl"> <FaLayerGroup></FaLayerGroup></span>
           <p>Design</p>
           <p>Composition</p>
           </div>
           <small>you've 70% done!</small>
           <div><progress className="progress progress-warning w-36" value="70" max="100"></progress></div>
          </div>

           <div className="bg-[#FEE6C2] m-8 rounded-lg text-black p-3">
           <p>01</p>
           <div className="py-5">
          <span className="text-2xl"> <FaRegCreditCard></FaRegCreditCard></span>
           <p>Edit</p>
           <p>Composition</p>
           </div>
           <small>you've 40% done!</small>
           <div><progress className="progress progress-error w-36" value="40" max="100"></progress></div>
          </div>
        </div>
       </div>
      </div>

       {/* second div */}
       <h2 className="text-left text-black py-5 uppercase font-bold">Statistic</h2>

      <div className="grid grid-cols-3 gap-3">
        {/* div left */}
        <div className="col-span-2">
          <div className="grid grid-cols-4 gap-3">
            {/* small 1 */}
            <div className="bg-[#2A2B47] text-white p-2 rounded-xl">
             <p className="text-3xl font-bold">2</p>
              <small>Videos</small> <br />
              <small>Edited!</small>
            </div>
            {/* small 2 */}
            <div >
              <div className="bg-[#2A2B47] text-white  p-2 rounded-xl">
             <p className="text-3xl  font-bold">3</p>
              <small>In</small> <br />
              <small>Progress!</small>
            </div>
            </div>
            {/* small 3 */}
            <div className="col-span-2 ">

             <div className="bg-[#2A2B47] text-white p-2 rounded-xl">
             <p className="text-3xl  font-bold">8.5</p>
              <small>Hours</small> <br />
              <small>Spend in this week</small>
            </div>

            </div>
          </div>


          <div className="py-5">
          <div className="bg-[#2A2B47] text-white p-2 rounded-xl">
              <div className="flex items-center justify-center py-3 text-5xl  "> <FaPhotoVideo></FaPhotoVideo></div>
              
              <p className="text-center py-2">Keep more editing with the Motion Mingle!</p>
            </div>
          </div>

        </div>

        {/* div right */}
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>

      </div>
          

        </div>
    );
};

UserHome.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.arrayOf(PropTypes.instanceOf(Date))]),
};

export default UserHome;