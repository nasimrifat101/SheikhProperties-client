import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Error/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement:<NotFound/>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);