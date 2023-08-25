import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import EditUserModal from "./EditUserModal";
// import { NavLink } from "react-router-dom";

function UserButton({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);


  const closeModal = () => {
    setModal(false)
  }
  return (
    
  
    <div >
      
    <div className="dropdown dropdown-hover ">
  <label tabIndex={0} className="md:flex items-center gap-1 m-1">
  {user && (
        <li
          className="flex items-center"
        >
          <div               onClick={() => setModal(true)}

            className="btn btn-circle  text-white text-base font-bold bg-violet-500 hover:text-white hover:bg-violet-500"
          >
            {user?.displayName.slice(0, 1)}
          </div>
          <BsChevronDown className="hidden md:block text-gray-800 h-3 font-extrabold" />
        </li>
      )}</label>
  <EditUserModal isOpen={modal} user={user} closeModal={closeModal}/>

</div>
    </div>
  
  );
}

export default UserButton;


