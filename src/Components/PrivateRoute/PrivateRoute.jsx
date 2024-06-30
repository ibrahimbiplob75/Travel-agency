import { useContext } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthProvider)
    if(!user){
        return <Navigate to={"/login"}></Navigate>
    //   return (
    //     <div>
    //       <span className="loading loading-ring loading-xs"></span>
    //       <span className="loading loading-ring loading-sm"></span>
    //       <span className="loading loading-ring loading-md"></span>
    //       <span className="loading loading-ring loading-lg"></span>
    //     </div>
    //   );  
    }
    else{
        return children;
    }
    
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};