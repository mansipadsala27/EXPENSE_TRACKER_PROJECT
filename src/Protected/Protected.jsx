import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ role }) => {

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== role) {
    return <Navigate
      to={user.role === "admin" ? "/admindash" : "/userdash"}
      replace
    />;
  }

  return <Outlet />;
};

export default Protected;