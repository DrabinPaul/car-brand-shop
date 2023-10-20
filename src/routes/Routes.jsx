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

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("http://localhost:5000/productCard"),
            },
            {
                path:'/addProducts',
                element:<AddProducts></AddProducts>
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
              element:<MyCart></MyCart>,
              loader: () => fetch("http://localhost:5000/cart"),
            },
            {
                path: "/productCard/:name",
                element: <ProductCard></ProductCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/productCard/${params.name}`),
          },
          {
            path:"/details/:id",
            element:<ProductDetails></ProductDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`),

          },
          {
            path: "/update/:id",
            element: <ProductUpdate></ProductUpdate> ,
            loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`),
          }
        ]
    }
])

export default router;