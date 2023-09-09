import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from './../Shared/NavBar/Navbar';
import BackToTop from "../Home/BackToTop/BackToTop";


const LayOut = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet />
      </div>
      <BackToTop/>

      <Footer />
    </>
  );
};

export default LayOut;