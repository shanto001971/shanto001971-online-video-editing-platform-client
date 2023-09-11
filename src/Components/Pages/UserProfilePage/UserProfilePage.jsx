import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { BiSolidUser } from "react-icons/bi";
import { LuHelpingHand } from "react-icons/lu";
import ProfileInformation from "./ProfileInformation";
import SubscriptionPlan from "./SubscriptionPlan";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [activeComponent, setActiveComponent] = useState("ProfileInformation"); //by default component uses active component

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
    <div className="flex items-center gap-2 md:gap-4 text-[15px] font-semibold text-gray-500 ml-6 mt-6">
        <Link to="/">
          <p className="cursor-pointer">Home</p>
        </Link>
        <MdKeyboardArrowRight className="text-lg"/>
          <p className="cursor-pointer">Profile Page</p>
      </div>
    <div className="md:flex gap-20 mx-10 mt-10">
      <div className="lg:w-[250px]">
        <div className="flex flex-col items-center my-4">
          <div className="btn btn-circle text-white text-5xl font-bold bg-blue-500 hover:text-white hover:bg-blue-600 object-cover w-20 h-20 mx-2 rounded-full">
            {user?.displayName?.slice(0, 1) || "User"}
          </div>
          <p className="py-2 text-xl font-semibold text-[#141141]">
            {user?.displayName || "User"}
          </p>
        </div>
        <div className="flex md:block items-center justify-center gap-16">
          <button
            onClick={() => handleButtonClick("ProfileInformation")}
            className="flex items-center justify-start gap-1 bg-gray-100 py-2 px-5 rounded-md my-0 md:my-3 w-full"
          >
            <BiSolidUser className="text-xl text-violet-950" />
            <p className="text-[17px] font-semibold text-violet-950">Profile</p>
          </button>
          <button
            onClick={() => handleButtonClick("SubscriptionPlan")}
            className="flex items-center justify-start gap-1 bg-gray-100 py-2 px-5 rounded-md w-full"
          >
            <LuHelpingHand className="text-xl text-violet-950" />
            <p className="text-[17px] font-semibold text-violet-950">
              Subscription Plan
            </p>
          </button>
        </div>
      </div>
      <div className="w-full">
        {activeComponent === "ProfileInformation" && <ProfileInformation />}
        {activeComponent === "SubscriptionPlan" && <SubscriptionPlan />}
      </div>
    </div>
    </>
  );
};

export default UserProfile;
