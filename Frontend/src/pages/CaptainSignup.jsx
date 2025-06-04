import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [captainData, setCaptainData] = useState({});
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstname: firstname,
        lastname: lastname,
      },
      vehicleInfo: {
        vehicleColor: color,
        vehiclePlate: plate,
        vehicleCapacity: capacity,
        vehicleType: vehicleType
      },
      email: email,
      password: password,
    });
    console.log(captainData);
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
          <h3 className="text-xl font-serif">Captain's FullName</h3>
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
          <h3 className="text-xl font-serif">Captain's Email</h3>
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
          <h3 className="text-xl font-serif">Enter your vehicle information</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3">
              <input
                required
                type="text"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                placeholder="color"
                className="bg-[#eeeeee] p-3 rounded-md w-1/2"
              />
              <input
                required
                type="text"
                value={plate}
                onChange={(e) => {
                  setPlate(e.target.value);
                }}
                placeholder="plate no"
                className="bg-[#eeeeee] p-3 rounded-md w-1/2"
              />
            </div>
            <div className="flex gap-3">
              <input
                required
                type="text"
                value={capacity}
                onChange={(e) => {
                  setCapacity(e.target.value);
                }}
                placeholder="capacity"
                className="bg-[#eeeeee] p-3 rounded-md w-1/2"
              />
              <input
                required
                type="text"
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
                placeholder="vehicleType"
                className="bg-[#eeeeee] p-3 rounded-md w-1/2"
              />
            </div>
          </div>
          <button className="bg-black text-white p-3 mt-4 rounded">
            Register Now
          </button>
          <p className="text-center text-md">
            Already have an Account?{" "}
            <Link
              to={"/captain-login"}
              className="text-blue-600 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;
