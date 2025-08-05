import { useRoutes } from "react-router-dom";
import ProductList from "./ProductList";
import Login from "./Login";
import Register from "./Register";
import RegisterLayout from "../layout/RegisterLayout";

export default function useRouteElement(){
 // do something
 const routeElement = useRoutes([

    {
        path : '/',
        element:<ProductList/>
    },
    {
        path:'/login',
        element:<RegisterLayout><Login/></RegisterLayout>
    },
    {
        path:'/register',
        element:<RegisterLayout> <Register/></RegisterLayout>
    }
 ])
 return routeElement
};