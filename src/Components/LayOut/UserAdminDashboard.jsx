import { Link, Outlet } from "react-router-dom";
import {
  FaChartPie,
  FaUser,
  FaHome,
  FaMailBulk,
  FaComments,
} from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const UserAdminDashboard = () => {
  // TODO: load admin based data from the database
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const { theme, changesThemeTextColor } = useTheme(); // for using light and dark themes

  return (
    <div className="drawer  lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul
          className={`menu p-4 w-80 min-h-full bg-base-200  ${changesThemeTextColor()}`}
        >
          {/* Sidebar content here */}
          {/* conditional rendaring user and admin */}

          {isAdmin ? (
            <>
              <h2 className="text-3xl py-10">Motion Mingle </h2>
              <li>
                <Link to="/useradmindashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </Link>
              </li>
              <li>
                <Link to="/useradmindashboard/allusers">
                  <FaUser></FaUser> All Users
                </Link>
              </li>
              <li>
                <Link to="/useradmindashboard/adminchart">
                  <FaChartPie></FaChartPie> Admin Chart
                </Link>
              </li>

              <div className="divider"></div>

              <li>
                <Link to="/">
                  <FaHome></FaHome> Home
                </Link>
              </li>
              <li>
                <Link>
                  <FaMailBulk></FaMailBulk> Contact
                </Link>
              </li>
            </>
          ) : (
            <>
              <h2 className="text-3xl py-10">Motion Mingle </h2>
              <li>
                <Link to="/useradmindashboard/userhome">
                  <FaHome></FaHome> User Home
                </Link>
              </li>
              {/* <li> <Link to="/useradmindashboard/paidusers"> <FaUser></FaUser> paid Users</Link> </li> */}
              <li>
                <Link to="/useradmindashboard/userschart">
                  <FaChartPie></FaChartPie> Users Chart
                </Link>
              </li>
              <li>
                <Link to="/useradmindashboard/userfeedback">
                  <FaComments></FaComments>Give Feedback
                </Link>
              </li>

              <div className="divider"></div>

              <li>
                <Link to="/">
                  <FaHome></FaHome> Home
                </Link>
              </li>
              <li>
                <Link>
                  <FaMailBulk></FaMailBulk> Contact
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserAdminDashboard;
