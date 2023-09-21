import React from "react";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const WorksPerk = () => {
  const { theme, changesThemeTextColor, changesThemeBgColor } = useTheme(); //for dark amd light mode themes

  const perks = [
    {
      id: 1,

      title: "Hybrid work environment",
      details:
        "Work the way you want to. At MotionMingle, we embrace a hybrid environment – this means you can work in-office, from home or your happy balance of both.",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/71bjMaos7GRlFu5e4fXnp2/f272388f4d90b3ddddc6b8bd6bea0787/Group_135.svg",
    },
    {
      id: 2,
      title: "Flexible work culture",
      details:
        "And we mean it. We encourage you to work in the way that works for you - that means flexible working hours and generous leave structures.",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/7dtIONBQZ0IWo2kCOymFFC/0e4a105abcef424d755d1a29f80d7c5f/watch__1_.svg",
    },
    {
      id: 3,
      title: "Paid parental and personal leave   ",
      details:
        "We believe that work/life balance is important. That's why we provide flexible parental and personal leave to all of our staff.  ",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/3tRyww2BM04kOHIGd75Gaz/0a970a0580391c11899b76f25e6c4a24/Group_136.svg",
    },
  ];
  const perks1 = [
    {
      id: 4,
      title: "Custom-ordered equipment",
      details:
        "To build something great, you need the right tools. At MotionMingle, you can order the equipment that works best for you and sets you up for success.",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/vg3nREnOLc48ZksN3eeU3/d0364e38c4730caa53cccfe449131e00/laptop_mac_1.svg",
    },
    {
      id: 5,
      title: "Sponsored learning opportunities",
      details:
        "At MotionMingle, we support life-long learning. We understand that education and training helps careers flourish, so we happily sponsor our staff's learning pursuits. Seminars, courses, books  – you name it",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/6r6MR5sPLyrRKcDrMqTo0x/827135a2bd37936b7d100466cb278a04/Group_137_1.svg",
    },
    {
      id: 6,
      title: "Convenient commuting",
      details:
        "Commuting to work should be simple. MotionMingle HQ is based in Fortitude Valley, Brisbane. Parking and public transport is just a short walk away. We've got cyclists covered too with racks and showers.",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/25q64RWjsiaoAM8gjUxN85/552333f274f7e380f7cccedaccea4216/directions_transit_1.svg",
    },
  ];
  const perks2 = [
    {
      id: 8,
      title: "More perks in the works  ",
      details:
        "We're committed to putting our people first and creating a great work environment. There are even more people-focused benefits on the horizon that we can't wait to share.",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/pPDJ3u8NvXIq1pnD1CUbk/b029367e91cb9aceaa4ff0da59a512b8/Group_140.svg",
    },
    {
      id: 7,
      title: "Retreats & team events  ",
      details:
        "We're a celebratory bunch. From Friday afternoon knock-offs to trivia nights and retreats, a good time is always guaranteed at MotionMingle. Working remotely? No worries. We've found digital solutions that let everyone join in on the fun.",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/1AHeFlMvZxOjG7gZ2v9bx4/231799796b67bc1bf7c0ec836b1c7942/Group_138.svg",
    },

    {
      id: 9,
      title: "Global impact",
      details:
        "We think globally at MotionMingle. With over 17 million users in 238 countries, it's essential. Our office locations are expanding, we're providing community support to the not-for-profits and education sectors and we're working on lowering our carbon footprint.",
      img: "https://images.ctfassets.net/b4k16c7lw5ut/26MK1UkkjWGQN3oR0BvWMy/5999ef81f82e3901bf861c14530504ef/Group_139.svg",
    },
  ];
  return (
    <div
      className={`${
        theme.mode === "dark" ? "text-gray-100" : "bg-violet-50 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold pt-5 md:pt-8 leading-none text-center sm:text-4xl ">
        MotionMingle work perks
      </h1>
      <div className="grid mx-5 md:m-7 lg:m-16 sm:gap-3 lg:gap-6 mb-8 md:grid-cols-3 sm:grid-cols-2">
        {perks.map((perk) => (
          <div
            key={perk.id}
            className={`border-t-4 border-indigo-200 p-6 rounded-3xl rounded-tr-sm mt-5 md:mt-0  shadow-lg relative ${changesThemeBgColor()}`}
          >
            <div className="">
              <div className="absolute p-4 rounded-full  rounded-tr-none bg-indigo-200 -top-1 left-0">
                {" "}
                <img className="w-6 h-6  " src={perk.img} alt="" />
                <div className="absolute top-1 -right-5">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-indigo-200"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21 0C9.40202 0 0 9.40202 0 21V0H21Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              <p
                className={`absolute -top-1 left-14 pl-8 pt-1 mt-1 rounded-tl-3xl border-indigo-200   md:text-xl font-semibold leading-none  ${
                  theme.mode === "dark" ? "text-gray-100" : " text-indigo-900"
                }`}
              >
                {perk.title}
              </p>
            </div>

            <p
              className={`pt-10 font-medium ${
                theme.mode === "dark" ? "text-gray-100" : " text-gray-700"
              }`}
            >
              {perk.details}
            </p>
          </div>
        ))}
      </div>
      <div className="grid mx-5 md:m-7 lg:m-16  sm:gap-3 lg:gap-6 mb-8 md:grid-cols-3 sm:grid-cols-2">
        {perks1.map((perk) => (
          <div
            key={perk.id}
            className={`border-t-4 border-pink-200 p-6 rounded-3xl rounded-tr-sm mt-5 md:mt-0 shadow-lg relative ${changesThemeBgColor()}`}
          >
            <div>
              <div className="absolute p-4 rounded-full  rounded-tr-none bg-pink-200 -top-1 left-0">
                {" "}
                <img className="w-6 h-6  " src={perk.img} alt="" />
                <div className="absolute top-1 -right-5">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-pink-200"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21 0C9.40202 0 0 9.40202 0 21V0H21Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              <p
                className={`absolute -top-1 left-7 lg:left-14 pl-8 pt-1 mt-1 rounded-tl-3xl border-indigo-200   md:text-xl font-semibold leading-none ${
                  theme.mode === "dark" ? "text-gray-100" : "text-indigo-900"
                }`}
              >
                {perk.title}
              </p>
            </div>

            <p
              className={`pt-10 font-medium ${
                theme.mode === "dark" ? "text-gray-100" : " text-gray-700"
              }`}
            >
              {perk.details}
            </p>
          </div>
        ))}
      </div>
      <div className="grid mx-5 md:m-7 lg:m-16 pb-7  sm:gap-3 lg:gap-6 mb-8 md:grid-cols-3 sm:grid-cols-2">
        {perks2.map((perk) => (
          <div
            key={perk.id}
            className={`border-t-4 border-violet-200 p-6 rounded-3xl rounded-tr-sm mt-5 md:mt-0   shadow-lg relative ${changesThemeBgColor()}`}
          >
            <div>
              <div className="absolute p-4 rounded-full  rounded-tr-none bg-violet-200 -top-1 left-0">
                {" "}
                <img className="w-6 h-6  " src={perk.img} alt="" />
                <div className="absolute top-1 -right-5">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-violet-200"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21 0C9.40202 0 0 9.40202 0 21V0H21Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              <p
                className={`absolute -top-1 left-14 pl-8 pt-1 mt-1 rounded-tl-3xl border-indigo-200   md:text-xl font-semibold leading-none ${
                  theme.mode === "dark" ? "text-gray-100" : "text-indigo-900"
                }`}
              >
                {perk.title}
              </p>
            </div>

            <p
              className={`pt-10 font-medium ${
                theme.mode === "dark" ? "text-gray-100" : " text-gray-700"
              }`}
            >
              {perk.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksPerk;
