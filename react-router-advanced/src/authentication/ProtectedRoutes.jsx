import { Navigate, Outlet } from "react-router-dom";
 

const protectedRoute = () => {
const isAuthenticated = localStorage.getItem("Auth");

return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>
 
}
export default protectedRoute