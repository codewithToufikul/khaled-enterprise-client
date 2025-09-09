import React from "react";
import { useAuth } from "./AuthContex";
import { Navigate, useLocation } from "react-router";

const AdminPrivetRoute = ({ children }) => {
  const { user, userLoading } = useAuth();
  const token = localStorage.getItem("token")
  const location = useLocation();

  // ⏳ Show loader while checking auth
  if (userLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );
  }

  // ❌ Not logged in → redirect to /dash-login
  if (!user || !token) {
    return <Navigate to="/dash-login" state={{ from: location }} replace />;
  }

  // ❌ Logged in but not admin → send to home
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminPrivetRoute;
