import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashBoard from "../layouts/Dashboard";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyDashboard from "../pages/Dashboard/MyDashboard/MyDashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Dashboard/Payment/Payment";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path:'mydashboard',
                element: <MyDashboard></MyDashboard>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },

            // Admin Routes
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },

            // Instructor Routes
            {
                path: 'addclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            }
        ]
    }
]);
export default router;