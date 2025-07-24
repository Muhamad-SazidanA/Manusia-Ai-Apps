import { createBrowserRouter, Navigate } from "react-router-dom";
import Template from "../layout/Template";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/users/Blog";
import Events from "../pages/users/Events";
import CaseStudy from "../pages/users/CaseStudy";
import DemoEmail from "../pages/users/Demo-Email";
import BrilianAI from "../pages/users/brilian-ai/BrilianAI";
import BrilianBanking from "../pages/users/brilian-ai/BrilianBanking";
import BrilianInsurance from "../pages/users/brilian-ai/BrilianInsurance";
import BrilianHospital from "../pages/users/brilian-ai/BrilianHospital";
import BrilianHumanR from "../pages/users/brilian-ai/BrilianHumanR";
import BrilianFMGC from "../pages/users/brilian-ai/BrilianFMGC";
import RangkumAI from "../pages/users/rangkum-ai/RangkumAI";
import RangkumAsuransi from "../pages/users/rangkum-ai/RangkumAsuransi";
import RangkumFMCG from "../pages/users/rangkum-ai/RangkumFMCG ";
import RangkumHC from "../pages/users/rangkum-ai/RangkumHC";
import RangkumHumanR from "../pages/users/rangkum-ai/RangkumHumanR";
import RangkumRetail from "../pages/users/rangkum-ai/RangkumRetail";
import RangkumManufacturing from "../pages/users/rangkum-ai/RangkumManufacturing";

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
                path: "events",
                element: <Events />,
            },
            {
                path: "casestudy",
                element: <CaseStudy />,
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
                path: "rangkum-ai",
                element: <RangkumAI />,
            },
            {
                path: "rangkumai-asuransi",
                element: <RangkumAsuransi />,
            },
            {
                path: "rangkumai-fmcg",
                element: <RangkumFMCG />,
            },
            {
                path: "rangkumai-hc",
                element: <RangkumHC />,
            },
            {
                path: "rangkumai-humanr",
                element: <RangkumHumanR />,
            },
            {
                path: "rangkumai-manufacturing",
                element: <RangkumManufacturing />,
            },
            {
                path: "rangkumai-retail",
                element: <RangkumRetail />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);