import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const authenticated = false;
  console.log("private route fired");
  let { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
