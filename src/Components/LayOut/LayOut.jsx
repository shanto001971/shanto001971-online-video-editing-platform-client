import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from './../Shared/NavBar/Navbar';


const LayOut = () => {
    return (
        <>
            <Navbar />
      <div className="min-h-[calc(100vh-346px)]">
        <Outlet />
      </div>
      <Footer />
        </>
    );
};

export default LayOut;