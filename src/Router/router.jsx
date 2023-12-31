import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/LayOut/LayOut";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";

import OnlineVideoEditor from "../Components/Pages/OnlineVideoEditor/OnlineVideoEditor";
import About from "../Components/Pages/About/About";
import DesktopVideo from "../Components/Pages/DesktopVideo/DesktopVideo/DesktopVideo";
import MobileVideo from "../Components/Pages/MobileVideo/MobileVideo/MobileVideo";
import ErrorComponent from "../Components/Pages/Error/ErrorComponent";
import VideoEditeLayout from "../Components/LayOut/Dashboard/videoEditePage/VideoEditeLayout/VideoEditeLayout";
import VideoEditePage from "../Components/LayOut/Dashboard/videoEditePage/videoEditePage/VideoEditePage";
import UserAdminDashboard from "../Components/LayOut/UserAdminDashboard";
import AllUsers from "../Components/Pages/UserAdminDashboard/AllUsers/AllUsers";
import UsersChart from "../Components/Pages/UserAdminDashboard/UsersChart/UsersChart";
import LearnEducationalVideo from "../Components/Pages/Learn/LearnEducationalVideo/LearnEducationalVideo";
import LearnExplainerVideo from "../Components/Pages/Learn/LearnExplainerVideo/LearnExplainerVideo";
import LearnTrainingVideo from "../Components/Pages/Learn/LearnTrainingVideo/LearnTrainingVideo";
import Templates from "../Components/Pages/Templates/TemplatesForMobile/Templates";
import AllTemplates from "../Components/Pages/Templates/AllTemplates/AllTemplates";
import Pricing from "../Components/Pages/Pricing/Pricing";
import UserProfile from "../Components/Pages/UserProfilePage/UserProfilePage";
import WorkWithUS from "../Components/Pages/WorkWithUs/WorkWithUS";
import AdminChart from "../Components/Pages/UserAdminDashboard/AdminChart/AdminChart";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Components/Pages/UserAdminDashboard/AdminHome/AdminHome";
import UserHome from "../Components/Pages/UserAdminDashboard/UserHome/UserHome";
import UserFeedback from "../Components/Pages/UserAdminDashboard/UserFeedback/UserFeedback";
import PaymentSuccess from "../Components/Pages/Pricing/PaymentSuccess";
import DonationSection from "../Components/Pages/Donation/DonationSection";
import Donate from "../Components/Pages/Donation/Donate";



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
                path: "/templates-for-mobile",
                element: <Templates />
            },
            {
                path: "/all-templates",
                element: <AllTemplates />
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/register',
                element: <Register/>,
            },
            {
                path: '/online-video',
                element: <OnlineVideoEditor/>,
            },
            {
                path: '/desktop-video',
                element: <DesktopVideo/>,
            },
            {
                path: '/mobile-video',
                element: <MobileVideo/>,
            },
            {
                path: '/work-with-us',
                element: <PrivateRoute><WorkWithUS /></PrivateRoute>
            },

            {
                path: "/learn-educational-video",
                element: <LearnEducationalVideo />
            },
            {
                path: "/learn-explainer-video",
                element: <LearnExplainerVideo />
            },
            {
                path: "/learn-training-video",
                element: <LearnTrainingVideo />
            },
            {
                path: '/pricing',
                element: <PrivateRoute><Pricing /></PrivateRoute>
            },
            {
                path: '/user-profile',
                element: <PrivateRoute><UserProfile /></PrivateRoute>,
            },
            {
                path: '/payments/success/:tran_id',
                element: <PaymentSuccess />,
            },

            {
                path: "/donation",
                element: <PrivateRoute><DonationSection /></PrivateRoute>
            },
            {
                path: "/donate",
                element: <Donate />
            },
        ],
    },
    {
        path: '/video-edit-page',
        element: <PrivateRoute><VideoEditeLayout /></PrivateRoute>,
        children: [
            {
                path: '/video-edit-page',
                element: <PrivateRoute><VideoEditePage /></PrivateRoute>
            },
        ],

    },

    //  user and admin dashboard routes 
    {
        path: 'dashboard',
        element: <UserAdminDashboard/>,
        children: [
            // users route
            {
                path: "user-home",
                element: <PrivateRoute><UserHome/></PrivateRoute>
            },
            {
                path: "users-chart",
                element: <PrivateRoute><UsersChart/></PrivateRoute>
            },
            {
                path: "user-feedback",
                element: <PrivateRoute><UserFeedback/></PrivateRoute>
            },
            // admin routes
            {
                path: "admin-home",
                element: <AdminRoute><AdminHome/></AdminRoute>
            },
            {
                path: "all-users",
                element: <AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path: "admin-chart",
                element: <AdminRoute><AdminChart/></AdminRoute>
            }
        ]
    }

]);
