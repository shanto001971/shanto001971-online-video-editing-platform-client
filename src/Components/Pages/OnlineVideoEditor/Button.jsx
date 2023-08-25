import { FaArrowRight } from "react-icons/fa";

const Button = ({buttonText}) => {
    return (
        <div >
            <button className='btn text-white min-w-[220px] h-[53px] signin-button bg-black'>
            {buttonText} 
             <span class="arrow-icon "><FaArrowRight /></span>
            </button>    
        </div>
    );
};

export default Button;