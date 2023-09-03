import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/LayOut/LayOut";
import Home from "../Components/Home/Home";
import Templates from "../Components/Pages/Templates/Templates";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import DashboardPage from "../Components/LayOut/Dashboard/DashboardPage";
import OnlineVideoEditor from "../Components/Pages/OnlineVideoEditor/OnlineVideoEditor";
import About from "../Components/Pages/About/About";
import VideoPlayer from "../Components/LayOut/Dashboard/DashboardContent/VideoPlayer/VideoPlayer";
import DesktopVideo from "../Components/Pages/DesktopVideo/DesktopVideo/DesktopVideo";
import MobileVideo from "../Components/Pages/MobileVideo/MobileVideo/MobileVideo";
import EmailModal from "../Components/Pages/Help/EmailModal";
import ErrorComponent from "../Components/Pages/Error/ErrorComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        errorElement:<ErrorComponent/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/emailUs",
                element: <EmailModal />
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
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
        children:[
            {
                path:"/dashboard",
                element:<VideoPlayer/>
            }
        ]

    },
]);