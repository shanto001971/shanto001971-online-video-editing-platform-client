import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Components/LayOut/LayOut';
import Home from '../Components/Home/Home';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';

import OnlineVideoEditor from '../Components/Pages/OnlineVideoEditor/OnlineVideoEditor';
import About from '../Components/Pages/About/About';
import DesktopVideo from '../Components/Pages/DesktopVideo/DesktopVideo/DesktopVideo';
import MobileVideo from '../Components/Pages/MobileVideo/MobileVideo/MobileVideo';
// import ErrorComponent from "../Components/Pages/Error/ErrorComponent";
import VideoEditeLayout from '../Components/LayOut/Dashboard/videoEditePage/VideoEditeLayout/VideoEditeLayout';
import VideoEditePage from '../Components/LayOut/Dashboard/videoEditePage/videoEditePage/VideoEditePage';
import UserAdminDashboard from '../Components/LayOut/UserAdminDashboard';
import AllUsers from '../Components/Pages/UserAdminDashboard/AllUsers/AllUsers';
import UsersChart from '../Components/Pages/UserAdminDashboard/UsersChart/UsersChart';
import HelpEmail from '../Components/Pages/Help/HelpEmail';
import LearnEducationalVideo from '../Components/Pages/Learn/LearnEducationalVideo/LearnEducationalVideo';
import LearnExplainerVideo from '../Components/Pages/Learn/LearnExplainerVideo/LearnExplainerVideo';
import LearnTrainingVideo from '../Components/Pages/Learn/LearnTrainingVideo/LearnTrainingVideo';
import Templates from '../Components/Pages/Templates/TemplatesForMobile/Templates';
import AllTemplates from '../Components/Pages/Templates/AllTemplates/AllTemplates';
import Pricing from '../Components/Pages/Pricing/Pricing';
import UserProfile from '../Components/Pages/UserProfilePage/UserProfilePage';
import WorkWithUS from '../Components/Pages/WorkWithUs/WorkWithUS';
import AdminChart from '../Components/Pages/UserAdminDashboard/AdminChart/AdminChart';
import PaymentSuccess from '../Components/Pages/Pricing/PaymentSuccess';
import Donate from '../Components/Pages/Donation/Donate';
import DonationSection from '../Components/Pages/Donation/DonationSection';
import UserHome from '../Components/Pages/UserAdminDashboard/UserHome/UserHome';
import UserFeedback from '../Components/Pages/UserAdminDashboard/UserFeedback/UserFeedback';
import AdminHome from '../Components/Pages/UserAdminDashboard/AdminHome/AdminHome';
import AdminRoute from './AdminRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut />,
        // errorElement:<ErrorComponent/>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/emailUs',
                element: <HelpEmail />,
            },
            {
                path: '/templates-for-mobile',
                element: <Templates />,
            },
            {
                path: '/all-templates',
                element: <AllTemplates />,
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
                path: '/desktopvideo',
                element: <DesktopVideo/>,
            },
            {
                path: '/mobilevideo',
                element: <MobileVideo/>,
            },
            {
                path: '/work-with-us',
                element: <WorkWithUS />,
            },

            {
                path: '/learn-educational-video',
                element: <LearnEducationalVideo />,
            },
            {
                path: '/learn-explainer-video',
                element: <LearnExplainerVideo />,
            },
            {
                path: '/learn-training-video',
                element: <LearnTrainingVideo />,
            },
            {
                path: '/pricing',
                element: <Pricing />,
            },
            {
                path: '/user-profile',
                element: <UserProfile />,
            },
            {
                path: '/payments/success/:tran_id',
                element: <PaymentSuccess />,
            },

            {
                path: "/donation",
                element: <DonationSection />
            },
            {
                path: "/donate",
                element: <Donate />
            },
        ],
    },
    {
        path: '/video-edit-page',
        element: <VideoEditeLayout />,
        children: [
            {
                path: '/video-edit-page',
                element: <VideoEditePage />,
            },
        ],
    },
    {
        path: 'useradmindashboard',
        element: <UserAdminDashboard/>,
        children: [
            // users route
            {
                path: "userhome",
                element: <UserHome/>
            },
            {
                path: "userschart",
                element: <UsersChart/>
            },
            {
                path: "userfeedback",
                element: <UserFeedback/>
            },
            // admin routes
            {
                path: "adminhome",
                element: <AdminRoute><AdminHome/></AdminRoute>
            },
            {
                path: "allusers",
                element: <AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path: "adminchart",
                element: <AdminRoute><AdminChart/></AdminRoute>
            }
        ],
    },
]);
