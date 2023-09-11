import { AiOutlineCheck } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import watermark from "../../../assets/profile-page/watermark-bg.png";
import { Link } from "react-router-dom";

const SubscriptionPlan = () => {
  const freePlan = [
    "10 iStock clips per month",
    "1M+ Premium Media",
    "60 Videos per month",
    "20 Remove background credits",
  ];

  const currentFeature = [
    "Reseller Rights",
    "Full Access to All Editing Features",
    "1 Brand Preset",
    "Full Access to Image Library",
    "Automated Text to Speech",
    "Unlimited Users",
    "Access to 6000+ Curated Templates",
    "Storage Upto 1 Gb",
    "Standard Video Library",
  ];
  return (
    <>
      <h4 className="mt-8 md:mt-0 text-xl font-semibold">Subscription Plan</h4>
      <hr className="my-4" />
      <div className="md:flex items-center gap-8">
        <div className="w-full md:w-[440px] p-8 bg-gray-100 rounded-md">
          <div className="flex items-center gap-2 my-4">
            <MdOndemandVideo />
            <p>Videos Exported</p>
          </div>
          <p className="text-end bg-white w-full rounded-3xl px-3 text-xs py-1">
            *Available only paid plans
          </p>
          <div className="flex items-center gap-2 my-4">
            <FaCrown />
            <p>iStock</p>
          </div>
          <p className="text-end bg-white w-full rounded-3xl px-3 text-xs py-1">
            *Available only paid plans
          </p>
          <div className="flex items-center gap-2 my-4">
            <BiSolidGridAlt />
            <p>Remove background credits</p>
          </div>
          <p className="text-end bg-white w-full rounded-3xl px-3 text-xs py-1">
            *Available only paid plans
          </p>
        </div>

        <div className="mt-4 md:mt-0 p-8 bg-gray-100 rounded-md">
          <p>Plan</p>
          <h6 className="text-lg font-medium my-2">
            Free Plan <span className="text-[#71AA00]">(Upgrade)</span>
          </h6>
          <div className="sm:flex items-center gap-8 mr-14">
            <div className="relative">
              <img src={watermark} alt="" />
              <p className="absolute bottom-2 left-32 text-white font-medium">
                Remove Watermark
              </p>
            </div>
            <div>
              <p className="mb-1">Try Business Plan</p>
              <div className="space-y-1">
                {freePlan.map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <AiOutlineCheck />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
                <Link to="/pricing">
                  <button className="btn btn-sm bg-[#99d81b] text-white hover:bg-[#71AA00] mt-4">
                    Upgrade
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h4 className="text-xl font-semibold">Current Plan Features</h4>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mr-36">
          {currentFeature.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <AiOutlineCheck />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubscriptionPlan;
