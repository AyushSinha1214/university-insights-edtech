import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("auth") ? children : <Navigate to="/" />;
};

export default PrivateRoute;
