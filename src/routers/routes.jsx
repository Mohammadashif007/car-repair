import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home/Home";
import Main from "../layout/Main/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {

            }
        ]
    }
])

export default routes;