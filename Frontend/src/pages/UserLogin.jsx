import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { email, password };
    setUserData(newUser);
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="px-8 h-screen flex flex-col justify-between">
      <div>
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png"
          alt="uber-logo"
          className="w-[80px]"
        />
        <form onSubmit={submitHandler} className="w-full flex flex-col gap-3">
          <h3 className="text-xl font-serif">User's Email</h3>
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
          <button
            type="submit"
            className="bg-black text-white p-3 mt-4 rounded font-serif text-xl"
          >
            User Login
          </button>
          <p className="text-center text-md">
            New here?{" "}
            <Link to="/user-signup" className="text-blue-600 cursor-pointer">
              Register As User
            </Link>
          </p>
        </form>
      </div>
      <Link
        to="/captain-login"
        className="bg-green-600 text-white mb-11 p-2 text-center font-medium rounded-md text-xl font-serif"
      >
        Sign In As Captain
      </Link>
    </div>
  );
};

export default UserLogin;
