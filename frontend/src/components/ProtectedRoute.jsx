import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStote";

export const ProtectedRoute = ({ allowedRols }) => {
  const { user } = useAuthStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  const userType = user?.user?.user_type  
  
  const hasAccess = allowedRols?.includes(userType);


  if (!hasAccess) {
    return <Navigate to="/Home" replace />;
  }

  return <Outlet />;
};