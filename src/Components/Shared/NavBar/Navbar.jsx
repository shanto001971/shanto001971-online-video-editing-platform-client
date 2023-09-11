import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import UserModal from "./UserModal";
import HelpButton from "../../Pages/Help/HelpButton";
import "./Navbar.css";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
 
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTemplateOpen, setIsTemplateOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const { user, logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const toggleTemplate = () => {
    setIsTemplateOpen(!isTemplateOpen);
  };

  const toggleTools = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  const toggleLearn = () => {
    setIsLearnOpen(!isLearnOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" bg-gray-100 text-gray-500 font-medium px-4 py-5 mx-auto md:max-w-full   sticky top-0 z-10 bg-transparent backdrop-blur-md">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center" title="Home">
          <img src={logo} alt="logo" className=" w-20 rounded-full" />
        
          <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Motion Mingle
          </span>
        </Link>
        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
        <li onMouseEnter={toggleTemplate} onMouseLeave={toggleTemplate}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " " : "default "
              }
            >
              Templates 
              {isTemplateOpen && (
                <ul className="pe-6 -ms-10 ps-6 bg-white tools-dropdown absolute flex-column justify-center pt-5  rounded-lg text-sm shadow-lg z-10 shadow-slate-500">
                  <li className="text-left pe-10">
                    <NavLink
                      to="/all-templates"
                      title="All Categories Templates"
                      className={({ isActive }) =>
                        isActive ? "text-black font-medium" : "default"
                      }
                    >
                     All Categories Templates
                    </NavLink>
                  </li>
                  <li className="py-3 text-left">
                    <NavLink
                      to="/templates-for-mobile"
                      title="Templates for Mobile"
                      className={({ isActive }) =>
                        isActive ? "text-black font-medium" : "default"
                      }
                    >
                     Templates for Mobile
                    </NavLink>
                  </li>
                </ul>
              )}
            </NavLink>
          </li>
          {/* tool section  start =================== */}
          <li onMouseEnter={toggleTools} onMouseLeave={toggleTools}>
            <NavLink
              to="/Tools"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold " : "default "
              }
            >
              Tools
              {isToolsOpen && (
                <ul className="pe-10 -ms-10 ps-10 backdrop-blur-sm bg-white/60 tools-dropdown absolute flex-column justify-center pt-5  rounded-lg">
                  <li className="text-left pe-10">
                    <NavLink
                      to="/onlinevideo"
                      title=" Online video editor"
                      className={({ isActive }) =>
                        isActive ? "text-xl text-black font-bold" : "default"
                      }
                    >
                      Online video editor
                    </NavLink>
                  </li>
                  <li className="py-3 text-left">
                    <NavLink
                      to="/desktopvideo"
                      title=" Online video edit"
                      className={({ isActive }) =>
                        isActive ? "text-xl text-black font-bold" : "default"
                      }
                    >
                      Video editor for desktop
                    </NavLink>
                  </li>
                  <li className="text-left pb-3">
                    <NavLink
                      to="/mobilevideo"
                      title=" Online video edit"
                      className={({ isActive }) =>
                        isActive ? "text-xl text-black font-bold" : "default"
                      }
                    >
                      Video editor for mobile
                    </NavLink>
                  </li>
                </ul>
              )}
            </NavLink>
          </li>
          {/* tool section end ===================== */}
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold nav-link" : "default nav-link"
              }
            >
              Explore
            </NavLink>
          </li>
          {/* Learn NavItem start */}
          <li onMouseEnter={toggleLearn} onMouseLeave={toggleLearn}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "" : "default "
              }
            >
              Learn
              {isLearnOpen && (
                <ul className="pe-6 -ms-10 ps-6 bg-white tools-dropdown absolute flex-column justify-center pt-5  rounded-lg text-sm shadow-lg z-10 shadow-slate-500">
                  <li className="text-left pe-10">
                    <NavLink
                      to="/learn-educational-video"
                      title="Educational Video Maker"
                      className={({ isActive }) =>
                        isActive ? "text-black font-medium" : "default"
                      }
                    >
                     Educational Video Maker
                    </NavLink>
                  </li>
                  <li className="py-3 text-left">
                    <NavLink
                      to="/learn-explainer-video"
                      title="Explainer Video Software"
                      className={({ isActive }) =>
                        isActive ? "text-black font-medium" : "default"
                      }
                    >
                     Explainer Video Software
                    </NavLink>
                  </li>
                  <li className="text-left pb-3">
                    <NavLink
                      to="/learn-training-video"
                      title=" Online video edit"
                      className={({ isActive }) =>
                        isActive ? "text-black font-medium" : "default"
                      }
                    >
                      Training Videos
                    </NavLink>
                  </li>
                </ul>
              )}
            </NavLink>
          </li>
          {/* Learn NavItem end */}
          <li>
           <HelpButton/>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold nav-link" : "default nav-link"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold  nav-link" : "default nav-link"
              }
            >
              About
            </NavLink>
          </li>
          {/* Conditional useradmindasboard  route  */}
          
          <li>
            <NavLink
              to={isAdmin ? "/useradmindashboard/adminhome" : "/useradmindashboard/userhome"}
              title="Dashboard"
              className={({ isActive }) =>
                isActive ? "text-xl text-black font-bold" : "default"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>

        <ul className="items-center hidden space-x-8 lg:flex  text-gray-400 font-semibold text-xl">
          {/* Conditional rendering login and logout */}

          {user ? (
            <>
              <UserModal handleLogOut={handleLogOut}/>{" "}
              <button
                onClick={handleLogOut}
                className="text-[16px] text-gray-500  default"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[16px] text-black font-bold nav-link"
                      : "default text-[16px] nav-link"
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <AiOutlineMenu className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <NavLink
                      to="/"
                      className="inline-flex flex-col items-start "
                      title="Home"
                    >
                      <img
                        src={logo}
                        alt="logo"
                        className="w-14  rounded-full"
                      />

                      <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Motion Mingle
                      </span>
                    </NavLink>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <RxCross2 className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-1">
                    {/* Template Nav Item start */}
                  <li onMouseEnter={toggleTemplate} onMouseLeave={toggleTemplate}>
                      <Link
                        to="/templates"
                        className={({ isActive }) =>
                          isActive ? "text-xl text-black font-bold nav-link" : "default nav-link"
                        }
                      >
                        Templates
                        {isTemplateOpen && (
                        <ul className="pe-6 -ms-10 ps-6 bg-white tools-dropdown absolute flex-column justify-center pt-5  rounded-lg text-sm shadow-lg z-10 shadow-slate-500">
                          <li className="text-left pe-10">
                            <NavLink
                              to="/all-templates"
                              title="All Categories Templates"
                              className={({ isActive }) =>
                                isActive ? "text-black font-medium" : "default"
                              }
                              >
                               All Categories Templates
                              </NavLink>
                            </li>
                            <li className="py-3 text-left">
                              <NavLink
                                to="/templates-for-mobile"
                                title="Templates for Mobile"
                                className={({ isActive }) =>
                                  isActive ? "text-black font-medium" : "default"
                                }
                              >
                               Templates for Mobile
                              </NavLink>
                            </li>
                          </ul>
                        )}
                      </Link>
                    </li>
                    {/* Template Nav Item end */}
                    <li>
                      <NavLink
                        to="/explore"
                        className={({ isActive }) =>
                          isActive ? "text-xl text-black font-bold nav-link" : "default nav-link"
                        }
                      >
                        Explore
                      </NavLink>
                    </li>
                    {/* Learn NavItem start */}
                    <li onMouseEnter={toggleLearn} onMouseLeave={toggleLearn}>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "default " : "default "
                        }
                      >
                        Learn
                        {isLearnOpen && (
                <ul className="pe-6 -ms-10 ps-6 bg-white tools-dropdown absolute flex-column justify-center pt-4 -mt-1 rounded-lg text-sm z-10 shadow-slate-500">
                  <li className="text-left pe-10">
                    <NavLink
                      to="/learn-educational-video"
                      title="Educational Video Maker"
                      className={({ isActive }) =>
                        isActive ? "text-black font-medium " : "default "
                      }
                    >
                     Educational Video Maker
                    </NavLink>
                  </li>
                  <li className="py-2 text-left">
                    <NavLink
                      to="/learn-explainer-video"
                      title="Explainer Video Software"
                      className={({ isActive }) =>
                        isActive ? "text-black font-medium" : "default"
                      }
                    >
                     Explainer Video Software
                    </NavLink>
                  </li>
                  <li className="text-left pb-2">
                    <NavLink
                      to="/learn-training-video"
                      title=" Online video edit"
                      className={({ isActive }) =>
                        isActive ? "text-black font-medium" : "default"
                      }
                    >
                      Training Videos
                    </NavLink>
                  </li>
                </ul>
              )}
                      </NavLink>
                    </li>
                    {/* Learn NavItem end */}
                    <li>
                    <HelpButton/>

                    </li>

                    {/* Conditional rendering login and logout */}

                    {user ? (
            <>
              <UserModal handleLogOut={handleLogOut}/>{" "}
              <button
                onClick={handleLogOut}
                className="text-[16px] text-gray-500  default"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[16px] text-black font-bold "
                      : "default text-[16px] "
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
