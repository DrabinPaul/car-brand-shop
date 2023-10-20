import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import AddProducts from "../pages/AddProducts/AddProducts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductCard from "../pages/Home/ProductCard/ProductCard";
import ProductDetails from "../pages/Home/ProductDetails/ProductDetails";
import ProductUpdate from "../pages/Home/ProductUpdate/ProductUpdate";
import MyCart from "../pages/Home/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("https://brandshop-server-side-drabin-paul-n0c1iwb8i.vercel.app/productCard"),
            },
            {
                path:'/addProducts',
                element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
              path:"/mycart/cart",
              element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
              loader: () => fetch("https://brandshop-server-side-drabin-paul-n0c1iwb8i.vercel.app/cart"),
            },
            {
                path: "/productCard/:name",
                element: <ProductCard></ProductCard>,
                loader: ({ params }) => fetch(`https://brandshop-server-side-drabin-paul-n0c1iwb8i.vercel.app/productCard/${params.name}`),
          },
          {
            path:"/details/:id",
            element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://brandshop-server-side-drabin-paul-n0c1iwb8i.vercel.app/details/${params.id}`),

          },
          {
            path: "/update/:id",
            element: <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute> ,
            loader: ({ params }) => fetch(`https://brandshop-server-side-drabin-paul-n0c1iwb8i.vercel.app/update/${params.id}`),
          }
        ]
    }
])

export default router;