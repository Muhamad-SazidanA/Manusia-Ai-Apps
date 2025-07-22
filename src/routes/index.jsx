import { createBrowserRouter, Navigate } from "react-router-dom";
import Template from "../layout/Template";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/users/Blog";
import DemoEmail from "../pages/users/Demo-Email";
import BrilianAI from "../pages/users/brilian-ai/BrilianAI";
import BrilianBanking from "../pages/users/brilian-ai/BrilianBanking";
import BrilianInsurance from "../pages/users/brilian-ai/BrilianInsurance";
import RangkumAI from "../pages/users/RangkumAI";
import BrilianHospital from "../pages/users/brilian-ai/BrilianHospital";
import BrilianHumanR from "../pages/users/brilian-ai/BrilianHumanR";
import BrilianFMGC from "../pages/users/brilian-ai/BrilianFMGC";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "demo-email",
                element: <DemoEmail />,
            },
            {
                path: "brilian-ai",
                element: <BrilianAI />,
            },
            {
                path: "brilianai-banking",
                element: <BrilianBanking />,
            },
            {
                path: "brilianai-insurance",
                element: <BrilianInsurance />
            },
            {
                path: "rangkum-ai",
                element: <RangkumAI />,
            },
            {
                path: "brilianai-hospital",
                element: <BrilianHospital />,
            },
            {
                path: "brilianai-humanr",
                element: <BrilianHumanR />,
            },
            {
                path: "brilianai-fmgc",
                element: <BrilianFMGC />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);