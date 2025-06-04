import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const newCaptainData = { email, password };
    setCaptainData(newCaptainData)
    console.log(captainData); // now logs correct value
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
