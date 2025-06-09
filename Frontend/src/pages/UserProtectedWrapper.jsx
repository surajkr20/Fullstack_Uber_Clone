import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/user-login");
    }
  }, [token, navigate]);

  // Only render children if token exists
  return <>{token ? children : null}</>;
};

export default UserProtectedWrapper;
