import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "./../Shared/NavBar/Navbar";
import BackToTop from "../Home/BackToTop/BackToTop";



const LayOut = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("user-profile");
  return (
    <>
      {noHeaderFooter || <Navbar />}
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
      <BackToTop />
    </>
  );
};

export default LayOut;
