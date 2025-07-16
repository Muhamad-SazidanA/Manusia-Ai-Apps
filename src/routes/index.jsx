import { createBrowserRouter, Navigate } from "react-router-dom";
import Template from "../layout/Template";
import App from "../pages/App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "",
                element: <App />,
            },
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);