import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token)
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          localStorage.removeItem("token");
          console.log(token)
          navigate('/user-login');
        }
      } catch (error) {
        console.error("Logout failed:", error);
        // Optional: Show error to user or still navigate
        navigate('/user-login');
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging you out...</div>;
};

export default UserLogout;
