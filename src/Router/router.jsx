import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/LayOut/LayOut";
import Home from "../Components/Home/Home";
import Templates from "../Components/Pages/Templates/Templates";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";

import OnlineVideoEditor from "../Components/Pages/OnlineVideoEditor/OnlineVideoEditor";
import About from "../Components/Pages/About/About";
import DesktopVideo from "../Components/Pages/DesktopVideo/DesktopVideo/DesktopVideo";
import MobileVideo from "../Components/Pages/MobileVideo/MobileVideo/MobileVideo";
// import ErrorComponent from "../Components/Pages/Error/ErrorComponent";
import VideoEditeLayout from "../Components/LayOut/Dashboard/videoEditePage/VideoEditeLayout/VideoEditeLayout";
import VideoEditePage from "../Components/LayOut/Dashboard/videoEditePage/videoEditePage/VideoEditePage";
import UserAdminDashboard from "../Components/LayOut/UserAdminDashboard";
import AllUsers from "../Components/Pages/UserAdminDashboard/AllUsers/AllUsers";
import UsersChart from "../Components/Pages/UserAdminDashboard/UsersChart/UsersChart";
import HelpEmail from "../Components/Pages/Help/HelpEmail";
import LearnEducationalVideo from "../Components/Pages/Learn/LearnEducationalVideo/LearnEducationalVideo";
import LearnExplainerVideo from "../Components/Pages/Learn/LearnExplainerVideo/LearnExplainerVideo";
import LearnTrainingVideo from "../Components/Pages/Learn/LearnTrainingVideo/LearnTrainingVideo";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        // errorElement:<ErrorComponent/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/emailUs",
                element: <HelpEmail />
            },
           
            {
                path: "/templates",
                element: <Templates />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/onlinevideo',
                element: <OnlineVideoEditor></OnlineVideoEditor>
            },
            {
                path: "/desktopvideo",
                element: <DesktopVideo></DesktopVideo>
            },
            {
                path: "/mobilevideo",
                element: <MobileVideo></MobileVideo>
            },
            
            {
                path: "/learn-educational-video",
                element: <LearnEducationalVideo/>
            },
            {
                path: "/learn-explainer-video",
                element: <LearnExplainerVideo/>
            },
            {
                path: "/learn-training-video",
                element: <LearnTrainingVideo/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <VideoEditeLayout/>,
        children:[
            {
                path:"/dashboard",
                element:<VideoEditePage/>
            }
        ]

    },

    {
        path: "useradmindashboard",
        element: <UserAdminDashboard></UserAdminDashboard>,
        children: [
            {
                path: "allusers",
                element: <AllUsers></AllUsers>
            },
            {
                path: "userschart",
                element: <UsersChart></UsersChart>
            }
        ]
    }

]);