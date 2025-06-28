import React from "react";
import captainImage from "../../public/ghibli.jpg";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center justify-between pt-4">
        <h3 className="text-2xl font-medium">Finish this Ride</h3>
        <h1
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
          className="font-bold"
        >
          <i className="ri-arrow-down-wide-fill text-2xl"></i>
        </h1>
      </div>

      <div className="flex justify-between items-center py-3 bg-orange-300 rounded-md p-2 shadow-sm">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-16"
            src={captainImage}
            alt="captain_img"
          />
          <div className="flex flex-col items-center">
            <h2 className="font-medium text-[19px] text-red-900">Abhinav</h2>
            <h2 className="font-medium text-[19px] text-red-900">Bhardwaaj</h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-medium">
            <i className="text-2xl ri-pin-distance-line"></i>
          </h2>
          <h4 className="text-center font-serif text-xl">2.2 KM</h4>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-4">
          <i className="ri-map-pin-2-line text-2xl"></i>
          <div className="">
            <h3 className="text-xl font-medium">562/11-A</h3>
            <p className="text-gray-900 font-serif">
              Samptachak, Patna, bihar, india
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <i className="ri-map-pin-user-fill text-2xl"></i>
          <div className="">
            <h3 className="text-xl font-medium">562/11-A</h3>
            <p className="text-gray-900 font-serif">
              Samptachak, Patna, bihar, india
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <i className="ri-money-rupee-circle-line text-2xl"></i>
          <div className="">
            <h3 className="text-xl font-medium">193.5</h3>
            <p className="text-gray-900 font-serif">Cash Cash</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <Link onClick={()=>{
            props.setFinishRidePanel(false);
        }} to={'/captain-riding'} className="bg-green-700 text-orange-100 rounded-md font-medium py-3 text-lg text-center flex justify-center">Finish Ride</Link>
        <p className="text-green-950 text-center text-sm">Click on Finish Ride if you completed the payment</p>
      </div>
    </div>
  );
};

export default FinishRide;
