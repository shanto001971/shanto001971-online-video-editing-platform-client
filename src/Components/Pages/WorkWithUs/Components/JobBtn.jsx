import { FaArrowRight } from "react-icons/fa";
import './WorkUs.css'
const JobBtn = ({buttonText}) => {
    const viewJobs = () => {
        window.open("https://jobs.careers.microsoft.com/global/en/search?q=clipchamp", "_blank");
      };
    return (
        <div >
            <button onClick={viewJobs} className='text-white btn glass max-h-8 hover:text-slate-700 transition duration-100 hover:duration-500 ' style={{paddingLeft:'5px',paddingRight:'5px'}}>
            {buttonText} 
             <span className="arrow-icon "><FaArrowRight /></span>
            </button>    
        </div>
    );
};

export default JobBtn;