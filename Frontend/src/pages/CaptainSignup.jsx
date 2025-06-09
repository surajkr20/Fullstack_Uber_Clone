import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();
  const {setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();

    const CaptainData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: color,
        plate: plate,
        capacity: capacity,
        vehicleType : vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        CaptainData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("captain registration failed. Please try again.");
    }

    // Clear form fields
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setColor("");
    setPlate("");
    setCapacity("");
    setVehicleType("");
  };

  return (
    <div className="px-8 py-3 h-screen flex flex-col justify-between">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
          alt="uber-logo"
          className="w-[130px] -ml-4"
        />
        <form onSubmit={submitHandler} className="w-full flex flex-col gap-3">
          <h3 className="text-xl font-serif">Captain's Full Name</h3>
          <div className="w-full flex gap-2">
            <input
              required
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
              className="bg-[#eeeeee] p-3 rounded-md w-1/2"
            />
            <input
              required
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
              className="bg-[#eeeeee] p-3 rounded-md w-1/2"
            />
          </div>

          <h3 className="text-xl font-serif">Captain's Email</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-[#eeeeee] p-3 rounded-md"
          />

          <h3 className="text-xl font-serif">Enter your vehicle information</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3 w-full">
              <input
                required
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Color"
                className="bg-[#eeeeee] p-3 rounded-md w-1/2"
              />
              <input
                required
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                placeholder="Plate No"
                className="bg-[#eeeeee] p-3 rounded-md w-1/2"
              />
            </div>
            <div className="flex gap-3 w-full">
              <input
                required
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Capacity"
                className="bg-[#eeeeee] p-3 rounded-md w-1/2"
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="bg-[#eeeeee] p-3 rounded-md w-1/2"
              >
                <option value="">Select Vehicle Type</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          <button className="bg-black text-white p-3 mt-4 rounded text-xl font-serif">
            Create Captain Account
          </button>

          <p className="text-center text-md">
            Already have an Account?{" "}
            <Link to="/captain-login" className="text-blue-600 cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;
