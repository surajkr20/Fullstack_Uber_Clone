import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const {user, setUser} = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUserData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUserData
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Registration failed. Please try again.");
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
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
          <h3 className="text-xl font-serif">User's FullName</h3>
          <div className="w-full flex gap-2">
            <input
              required
              type="text"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              placeholder="FirstName"
              className="bg-[#eeeeee] p-3 rounded-md w-1/2"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              placeholder="LastName"
              className="bg-[#eeeeee] p-3 rounded-md w-1/2"
            />
          </div>
          <h3 className="text-xl font-serif">User's Email</h3>
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
          <button className="bg-black text-white p-3 mt-4 rounded text-xl font-serif">
            Create Account
          </button>
          <p className="text-center text-md">
            Have a Account?{" "}
            <Link to={"/user-login"} className="text-blue-600 cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Link
        to={"/captain-signup"}
        className="bg-green-600 text-white mb-11 p-3 text-center font-medium rounded-md text-xl font-serif"
      >
        Signup As captain
      </Link>
    </div>
  );
};

export default UserSignup;
