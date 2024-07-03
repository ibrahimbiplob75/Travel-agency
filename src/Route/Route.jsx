import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Trip from "../Components/Trip/Trip";
import Review from "../Components/Review/Review";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DashHome from "../Components/Dashboard/DashHome";
import AddProduct from "../Components/Dashboard/AddProduct/AddProduct";
import ManageProduct from "../Components/Dashboard/ManageProduct/ManageProduct";
import UpdateProduct from "../Components/Dashboard/ManageProduct/UpdateProduct";
import axios from "axios";


const Route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trip",
        element: (
          <PrivateRoute>
            <Trip></Trip>
          </PrivateRoute>
        ),
      },
      {
        path: "review",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashHome></DashHome>,
    children: [
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/manage-product",
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: "/dashboard/update-product/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/product/${params.id}`, {
            withCredentials: true,
          }),
      },
    ],
  },
]);

export default Route;