import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { setCaptain } = useContext(CaptainDataContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token, navigate]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(responce =>{
    if(responce.status === 200){
      setCaptain(responce.data.captain);
      setLoading(false);
    }
  }).catch(err =>{
    console.log(err);
    localStorage.removeItem('token')
    navigate("/captain-login")
  })

  if (loading) {
    return <div>loading...</div>;
  }

  return <div>{token ? children : null}</div>;
};

export default CaptainProtectedWrapper;
