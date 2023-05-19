import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Signup/SingUp";
import AllToy from "../Pages/AllToy/AllToy/AllToy";
import Blog from "../Pages/Blog/Blog";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AddToy from "../Pages/AddToy/AddToy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import AllToyDetail from "../Pages/AllToy/AllToyDetail/AllToyDetail";
import MyToy from "../Pages/MyToy/MyToy/MyToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allToy',
                element: <AllToy></AllToy>
            },
            {
                path: "allToyDetail/:id",
                element: <PrivetRoute><AllToyDetail></AllToyDetail></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/cameras/${params.id}`)
            },
            {
                path: '/myToy',
                element: <PrivetRoute><MyToy></MyToy></PrivetRoute>
            },
            {
                path: '/addToy',
                element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/updateToy',
                element: <UpdateToy></UpdateToy>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SingUp></SingUp>
            },
        ]
    },
]);

export default router