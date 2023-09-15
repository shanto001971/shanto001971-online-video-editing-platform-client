// import { PiMessengerLogo } from "react-icons/pi";
// import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
// import { BsFolder2 } from "react-icons/bs";
import { useState } from "react";
import { FacebookProvider, CustomChat } from 'react-facebook';
import { useLocation } from "react-router-dom";

const SideIcon = () => {
  // const [hovered, setHovered] = useState(false);
  const location = useLocation();

  // Check if the current pathname is the home page ("/")
  const isHomePage = location.pathname === '/';

  // Render the SideIcon only if it's the home page
  if (!isHomePage) {
    return null;
  }
  return (
    <div className="fixed overflow-y-scroll overflow-x-hidden z-10 top-[80%] md:top-[70%] bottom-0  flex flex-col -right-4 sm:-right-7 gap-[2px] overflow-auto ">
     

      {/* <div className="flex flex-row-reverse group text-white">
        <MdOutlinePhotoSizeSelectActual className="w-[55px] h-[42px] sm:w-[70px] sm:h-[57px] bg-red-500 py-2 sm:py-3 ps-2 sm:ps-3 pr-7 hover:transition-transform ease-out transition-all hover:-translate-x-1" />
        <p className="bg-gray-800 text-[8px] sm:text-[10px] font-bold pt-[14px] sm:pt-5 px-6 uppercase text-white hidden group-hover:block ease-out transition ">
          Our Bestseller
        </p>
      </div>

      <div className="flex flex-row-reverse group text-white">
        <BsFolder2 className="w-[55px] h-[42px] sm:w-[70px] sm:h-[57px] bg-red-500 py-2 sm:py-3 ps-2 sm:ps-3 pr-7 hover:transition-transform ease-out transition-all hover:-translate-x-1" />
        <p className="bg-gray-800 text-[8px] sm:text-[10px] font-bold pt-[14px] sm:pt-5 px-6 uppercase text-white hidden group-hover:block ease-out transition ">
          Hide plane
        </p>
      </div> */}
      {/* <div className=" flex flex-row-reverse group text-white">
        <PiMessengerLogo
          onMouseLeave={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
          onClick={() => props.onClick && props.onClick()}

          style={{
            border: hovered ? "2px solid #f9f0ff" : "1px solid #f9f0ff",
          }}
          className="transition-3 w-[55px] h-[42px] sm:w-[70px] sm:h-[57px] bg-red-500 py-2 sm:py-3 ps-2 sm:ps-3 pr-7 hover:transition-transform ease-out transition-all hover:-translate-x-1"
        />
        <p
          style={{
            opacity: hovered ? "1" : "0",
          }}
          className="transition-3 bg-gray-800 text-[8px] sm:text-[10px] font-bold pt-[14px] sm:pt-5 px-6 uppercase text-white hidden group-hover:block ease-out transition "
        >
          Connect us
        </p>
      </div> */}
      <FacebookProvider appId="1030485761479705" chatSupport>
        <CustomChat pageId="116994098167601" minimized={true} />
      </FacebookProvider>
    </div>
  );
};

export default SideIcon;
