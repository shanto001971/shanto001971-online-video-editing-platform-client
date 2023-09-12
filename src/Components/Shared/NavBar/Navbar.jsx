import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import UserModal from "./UserModal";
import HelpButton from "../../Pages/Help/HelpButton";
import "./Navbar.css";
import { BiSolidSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {
 
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTemplateOpen, setIsTemplateOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const { user, logOut} = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleClick = (e) => {
    setTheme(e);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

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
          {/* useradmindasboard  route  */}
          <li>
            <NavLink
              to="/useradmindashboard"
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
          {/* For dark and light mood */}
        {/* <label className="swap swap-rotate">    
              <input type="checkbox" onChange={handleToggle}/>

              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
        </label> */}

        {/* <div className="flex flex-col items-center gap-0">
      <input type="checkbox" className="toggle"  onChange={handleToggle}/>
      <p className="text-xs -mt-3">{theme == 'dark' ? "light" : 'Dark'}</p>
      </div> */}

        <div className="-mr-5 mt-2">
          {theme == "dark" ? (
            <a href="">
              <BiSolidSun title="Make Light" className="text-4xl cursor-pointer" onClick={() => handleClick("light")} />
            </a>
          ) : (
            <a href="">
              <BsFillMoonFill title="Make Dark" className="text-2xl cursor-pointer" onClick={() => handleClick("dark")} />
            </a>
          )}
        </div>

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
