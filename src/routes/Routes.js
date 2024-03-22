import { AddProduct, Admin, Dashboard, Login } from "../pages";
import Category from "../pages/Category";
import CategoryList from "../pages/CategoryList";
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
    {
        path : '/category',
        element : <Category />
    },
    {
        path : '/category-list',
        element : <CategoryList />
    },
    
]

export {privateRoutes, contentRoutes, dashboardRoutes}