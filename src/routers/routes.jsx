import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home/Home";
import Main from "../layout/Main/Main";
import Add_service from "../Pages/Add_service/Add_service";
import New_service from "../Pages/New_service/New_service";
import Bookings from "../Pages/Bookings/Bookings";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Confirm_service from "../Pages/Home/Home/Our_services/Confirm_service";
import NewBookings from "../Pages/NewBookings/NewBookings";

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
                element: <PrivateRoute><Add_service></Add_service></PrivateRoute>
            },
            {
                path: '/new_service',
                element: <PrivateRoute><New_service></New_service></PrivateRoute>
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/bookings')
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
            },
            {
                path: '/confirm_service/:id',
                element: <PrivateRoute><Confirm_service></Confirm_service></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/new_bookings',
                element: <PrivateRoute><NewBookings></NewBookings></PrivateRoute>,
            }
        ]
    }
])

export default routes;