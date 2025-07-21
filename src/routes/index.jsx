import { createBrowserRouter, Navigate } from "react-router-dom";
import Template from "../layout/Template";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/users/Blog";
import DemoEmail from "../pages/users/Demo-Email";
import BrilianAI from "../pages/users/brilian-ai/BrilianAI";
import RangkumAI from "../pages/users/RangkumAI";
import Industries from "../pages/users/Industries";

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
                path: "rangkum-ai", 
                element: <RangkumAI />,
            },
            {
                path: "industries",
                element: <Industries />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);