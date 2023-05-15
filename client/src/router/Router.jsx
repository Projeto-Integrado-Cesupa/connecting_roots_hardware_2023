import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import MyAccount from "../components/MyAccount/MyAccount"
import Profile from "../components/Profile/Profile"
import PersonalInformation from "../components/PersonalInformation/PersonalInformation";
import Password from "../components/Password/Password";
import NotificationsAndAlerts from "../components/NotificationsAndAlerts/NotificationsAndAlerts";
import BenefitPlans from "../components/BenefitPlans/BenefitPlans";
import StepOne from "../components/PublishProject/StepOne";
import StepTwo from "../components/PublishProject/SetpTwo";
import PublishProject from "../components/PublishProject/PublishProject";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/Auth",
    element: <Auth />,
    children: [],
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <Profile />,
        children:[],
      },
      {
        path: 'PublishProject',
        element: <PublishProject />,
        children:[
          {
            path: '',
            element: <StepOne />,
            children:[
              
            ],
          },
          {
            path: 'StepTwo',
            element: <StepTwo />,
            children:[],
          },
        ],
      },
     
      {
        path: 'MyAccount',
        element: <MyAccount />,
        children:[
          {
            path: '',
            element: <PersonalInformation />,
            children:[],
          },
          {
            path: 'Password',
            element: <Password />,
            children:[],
          },
          {
            path: 'NotificationsAndAlerts',
            element: <NotificationsAndAlerts />,
            children:[],
          },
          {
            path: 'BenefitPlans',
            element: <BenefitPlans />,
            children:[],
          }
        ],
      },
    ],
  },
]);
