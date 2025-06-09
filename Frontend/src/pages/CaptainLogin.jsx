import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    const newCaptainData = { email, password };
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,newCaptainData);
      console.log(response)
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate("/captain-home");
      }

    } catch (error) {
       console.error("Signup Error:", error);
      alert("captain login failed. Please try again.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="px-8 py-4 h-screen flex flex-col justify-between">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
          alt="uber-logo"
          className="w-[130px] -ml-4 mb-2"
        />
        <form onSubmit={submitHandler} className="w-full flex flex-col gap-3">
          <h3 className="text-xl font-serif">Captain's Email</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@gmail.com"
            className="bg-[#eeeeee] p-3 rounded-md"
          />
          <h3 className="text-xl font-serif font-medium">Enter your password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-[#eeeeee] p-3 rounded-md"
          />
          <button type="submit" className="bg-black text-white p-3 mt-4 rounded text-xl font-serif">
            Captain Login
          </button>
          <p className="text-center text-md">
            New here?{" "}
            <Link to="/captain-signup" className="text-blue-600 cursor-pointer">
              Register as captain
            </Link>
          </p>
        </form>
      </div>

      <Link
        to="/user-login"
        className="bg-green-600 text-white mb-11 p-3 text-center font-medium rounded-md font-serif text-xl"
      >
        Sign in As User
      </Link>
    </div>
  );
};

export default CaptainLogin;
