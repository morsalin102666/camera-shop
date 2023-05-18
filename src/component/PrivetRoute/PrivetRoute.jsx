import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;