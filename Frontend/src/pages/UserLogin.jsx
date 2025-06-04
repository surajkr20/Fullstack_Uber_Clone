import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });
    console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="px-8 h-screen flex flex-col justify-between">
      <div className="">
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/uber-logo-black-transparent.png"
          alt="uber-logo"
          className="w-[80px]"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-full flex flex-col gap-3"
        >
          <h3 className="text-xl font-serif">What's your Email</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@gmail.com"
            className="bg-[#eeeeee] p-3 rounded-md"
          />
          <h3 className="text-xl font-serif font-medium">
            Enter your password
          </h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="bg-[#eeeeee] p-3 rounded-md"
          />
          <button className="bg-black text-white p-3 mt-4 rounded">
            Login
          </button>
          <p className="text-center text-md">
            join a fleet?{" "}
            <Link to={"/user-signup"} className="text-blue-600 cursor-pointer">
              register as user
            </Link>
          </p>
        </form>
      </div>
      <Link
        to={"/captain-login"}
        className="bg-green-600 text-white mb-11 p-2 text-center font-medium"
      >
        Sign-in As Captain
      </Link>
    </div>
  );
};

export default UserLogin;
