import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Trip from "../Components/Trip/Trip";
import Review from "../Components/Review/Review";


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
        path:"/trip",
        element:<Trip></Trip>
      },
      {
        path:"review",
        element:<Review></Review>
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
]);

export default Route;