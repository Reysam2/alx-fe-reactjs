import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("useAuth");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
export default ProtectedRoute;
