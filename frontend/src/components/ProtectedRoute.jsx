import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStote";

export const ProtectedRoute = ({ allowedRols }) => {
  const { user } = useAuthStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  const hasAccess = allowedRols.includes(user.user_type);

  if (!hasAccess) {
    if (user.user_type === "admin") {
      return <Navigate to={"/HomeAdmin"} />;
    } else if (user.user_type === "intel") {
      return <Navigate to={"/HomeIntel"} />;
    } else {
      return <Navigate to={"/HomeAirforce"} />;
    }
  }
  return <Outlet />;
};
