import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import MyAccount from "../components/MyAccount/MyAccount";
import Profile from "../components/Profile/Profile";
import PersonalInformation from "../components/PersonalInformation/PersonalInformation";
import Password from "../components/Password/Password";
import NotificationsAndAlerts from "../components/NotificationsAndAlerts/NotificationsAndAlerts";
import BenefitPlans from "../components/BenefitPlans/BenefitPlans";
import StepOne from "../components/PublishProject/StepOne";
import StepTwo from "../components/PublishProject/SetpTwo";
import PublishProject from "../components/PublishProject/PublishProject";
import ProjectsUser from "../components/ProjectsUser/ProjectsUser";
import AllProjectsUser from "../components/ProjectsUser/AllProjectsUser";
import AnalysisProjectsUser from "../components/ProjectsUser/AnalysisProjectsUser";
import ExecutionProjectsUser from "../components/ProjectsUser/ExecutionProjectsUser";
import CompletedProjectsUser from "../components/ProjectsUser/CompletedProjectsUser";
import Chat from "../components/Chat/Chat";
import ChatUser from "../components/Chat/ChatUser";
import ChatUserTwo from "../components/Chat/ChatUserTwo";
import Home2 from "../pages/Home/Home2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home2 />,
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
        path: "",
        element: <Profile />,
        children: [],
      },
      {
        path: "ProjectsUser",
        element: <ProjectsUser />,
        children: [
          {
            path: "",
            element: <AllProjectsUser />,
            children: [],
          },
          {
            path: "AnalysisProjectsUser",
            element: <AnalysisProjectsUser />,
            children: [],
          },
          {
            path: "ExecutionProjectsUser",
            element: <ExecutionProjectsUser />,
            children: [],
          },
          {
            path: "CompletedProjectsUser",
            element: <CompletedProjectsUser />,
            children: [],
          },
        ],
      },
      {
        path: "PublishProject",
        element: <PublishProject />,
        children: [
          {
            path: "",
            element: <StepOne />,
            children: [],
          },
          {
            path: "StepTwo",
            element: <StepTwo />,
            children: [],
          },
        ],
      }, {
        path: "Chat",
        element: <Chat />,
        children: [
          {
            path: "",
            element: <ChatUser />,
            children: [],
          },
          {
            path: "ChatUserTwo",
            element: <ChatUserTwo />,
            children: [],
          },
        ],
      },

      {
        path: "MyAccount",
        element: <MyAccount />,
        children: [
          {
            path: "",
            element: <PersonalInformation />,
            children: [],
          },
          {
            path: "Password",
            element: <Password />,
            children: [],
          },
          {
            path: "NotificationsAndAlerts",
            element: <NotificationsAndAlerts />,
            children: [],
          },
          {
            path: "BenefitPlans",
            element: <BenefitPlans />,
            children: [],
          },
        ],
      },
    ],
  },
]);
