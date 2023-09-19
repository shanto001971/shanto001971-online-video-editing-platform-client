import { Link } from "react-router-dom";
import "./Donation.css";
import { useTheme } from "../../ThemeProvider/ThemeProvider";


const Donation = () => {
    const { theme } = useTheme(); // for using light and dark themes
    return (
        <div className={`bg ${theme.mode === 'dark' ? 'text-gray-800' : ''}`}>
            <p className=' text-center '>  We stand with the people of Russia. <span className="font-bold"><Link to={"/donation"}>Donate now!</Link></span></p>
        </div>
    );
};

export default Donation;