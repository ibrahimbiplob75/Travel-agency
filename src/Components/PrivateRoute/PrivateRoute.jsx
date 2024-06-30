import { useContext } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthProvider)
    const location=useLocation();
    console.log(loading)
    if(loading){
        
          <span className="loading loading-ring loading-xs"></span>
           
    }

    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>;
    
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};