import { Link } from "react-router-dom";
import "./Donation.css";


const Donation = () => {
    return (
        <div className="bg">
            <p className=' text-center '>  We stand with the people of Russia. <span className="font-bold"><Link to={"/donation"}>Donate now!</Link></span></p>
        </div>
    );
};

export default Donation;