import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
    const { dataProfile } = useAuth();
    
    return dataProfile ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
