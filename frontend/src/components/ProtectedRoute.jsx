import React from "react";
import { Navigate, useLocation } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  return localStorage.getItem("token") ? children : <Navigate to="/login" replace state={{ from: location }} />;
};
export default ProtectedRoute;
