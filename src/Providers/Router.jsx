import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Error/NotFound";
import { Login, Signup } from "../Pages/Auth";
import AllProperty from "../Pages/AllProperty/AllProperty";
import Saved from "../Pages/Save/Saved";
import Admin from "../Pages/Admin/Admin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/Signup",
                element: <Signup />
            },
            {
                path: "/allProperties",
                element: <AllProperty />
            },
            {
                path: "/saved",
                element: <Saved />
            },
            {
                path: "/admin",
                element: <Admin/>
            },
        ]
    },
]);