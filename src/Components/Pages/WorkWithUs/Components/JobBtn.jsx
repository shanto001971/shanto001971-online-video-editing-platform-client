import { FaArrowRight } from "react-icons/fa";
import './WorkUs.css'
const JobBtn = ({buttonText}) => {
    return (
        <div >
            <button className='text-white btn glass max-h-8 hover:text-slate-700 transition duration-100 hover:duration-500 ' style={{paddingLeft:'5px',paddingRight:'5px'}}>
            {buttonText} 
             <span className="arrow-icon "><FaArrowRight /></span>
            </button>    
        </div>
    );
};

export default JobBtn;