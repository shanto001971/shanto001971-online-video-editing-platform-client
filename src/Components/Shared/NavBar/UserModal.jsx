import { useContext } from "react";
import { RiPencilFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

function UserModal({ handleLogOut }) {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="dropdown dropdown-hover dropdown-end">
        <label tabIndex={0} className="md:flex items-center gap-1 m-1">
          <img
            style={{ width: "40px", borderRadius: "50%", marginLeft: "7px" }}
            src={user.photoURL}
            alt=""
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content bg-indigo-50 z-[1] menu p-3 md:p-5   text-center shadow-lg  rounded-box w-[400px]"
        >
          {" "}
          <p className="py-2">{user?.email}</p>
          <div className="text-center">
            <div className="btn btn-circle relative text-white text-base font-bold bg-violet-500 hover:text-white hover:bg-violet-500">
              {user?.displayName?.slice(0, 1) || "User"}
            </div>
            <div
              style={{
                position: "absolute",
                top: "85px",
                right: "172px",
                backgroundColor: "white",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
              }}
            >
              <RiPencilFill className="h-4 text-gray-700 " />
            </div>
          </div>
          <p className="py-2">
            Hi,{user?.displayName?.split(" ")[0] || "User"}
          </p>
          <div className="text-center">
            <button class=" py-1 text-sm w-56 text-indigo-600 font-semibold rounded-full border  border-gray-400">
              Manage Your Google Account
            </button>
          </div>
          <div className="flex text-start">
            <span className="rounded-l-xl text-sm  text-gray-600 py-2 px-12 font-semibold my-3  bg-gray-200 flex items-center ">
              <BsPlusCircle className=" text-blue-700 " /> Add Account
            </span>
            <span
              onClick={handleLogOut}
              style={{ marginLeft: "2px" }}
              className="rounded-r-xl cursor-pointer py-2 px-12 text-sm  flex items-center  text-gray-600 font-semibold my-3  bg-gray-200"
            >
              {" "}
              <MdOutlineLogout className="text-black" />
              Sign Out
            </span>
          </div>
          <div className=" text-xs flex items-center justify-center">
            {" "}
            <p>Privacy Policy</p>
            <TbPointFilled className="h-2 mx-2" /> <p>Terms of Service</p>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default UserModal;
