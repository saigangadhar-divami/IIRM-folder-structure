import { Navigate } from "react-router-dom";
import { JSX, useContext } from "react";
import { AuthContext } from "../context";



const allowedRoles = ["super_admin", "admin", "manager", "user"];

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth || !auth.user) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(auth.user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;


