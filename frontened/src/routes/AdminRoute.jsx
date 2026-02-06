import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");

  if (!token || role !== "admin") {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminRoute;
