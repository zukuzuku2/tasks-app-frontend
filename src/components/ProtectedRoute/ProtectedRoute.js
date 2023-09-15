import { useAuth } from "../../contexts/CurrentUserContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated, currentUser } = useAuth();
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
