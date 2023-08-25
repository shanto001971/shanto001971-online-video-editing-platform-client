import { Link } from "react-router-dom";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";


const GoToSignUp = () => {
    return (
        <div className="bg-[#2A323C] px-5 md:px-20 py-20 border-b">
           <h2 className="text-center text-[42px] text-white font-bold">Tap into your creative power on Motion Mingle web <br /> editor</h2> 
            <div className="text-center "> 
            <Link to="/register"> 
            <div >
            <button className='btn text-black min-w-[220px] h-[53px] signin-button bg-[#00cae0] hover:bg-[#77b5be]'>
             Free Sign Up
             <span class="arrow-icon "><FaArrowRight /></span>
            </button>    
        </div>
            
             </Link> 
            </div> 
         </div>
    );
};

export default GoToSignUp;