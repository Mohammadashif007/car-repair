import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home/Home";
import Main from "../layout/Main/Main";
import Add_service from "../Pages/Add_service/Add_service";
import New_service from "../Pages/New_service/New_service";
import Bookings from "../Pages/Bookings/Bookings";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

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
                path: '/add_service',
                element: <Add_service></Add_service>
            },
            {
                path: '/new_service',
                element: <New_service></New_service>
            },
            {
                path: '/bookings',
                element: <Bookings></Bookings>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])

export default routes;