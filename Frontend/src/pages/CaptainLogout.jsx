import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const logout = async () =>{
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if(response.status === 200){
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                }
            } catch (error) {
                console.log("captain logout failed: ", error);
                navigate('/captain-login');
            }
        }
        logout();
    }, [navigate])
  return (
    <div>Logging you out...</div>
  )
}

export default CaptainLogout