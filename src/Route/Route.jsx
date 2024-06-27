import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";


const Route =  createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])

export default Route;