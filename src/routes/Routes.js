import { AddProduct, Admin, Dashboard, Login } from "../pages";
import Signup from "../pages/Signup";

const privateRoutes =[
    {
        path : 'login',
        element : <Login />
    },
    {
        path : 'signup',
        element : <Signup />
    },
];

const contentRoutes = [
    {
        path : '/dashboard',
        element : <Dashboard />
    },
]

const dashboardRoutes = [
    {
        path : '/addproducts',
        element : <AddProduct />
    },
    {
        path : '/admin',
        element : <Admin />
    },
]

export {privateRoutes, contentRoutes, dashboardRoutes}