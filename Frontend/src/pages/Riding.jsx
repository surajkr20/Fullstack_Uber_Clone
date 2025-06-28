import React from "react";
import captainImage from "../../public/ghibli.jpg";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to={'/home'} className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full m-2 right-2 top-2">
        <i className="ri-home-4-line text-lg font-medium"></i>
      </Link>

      <div className="h-1/2">
        <img
          className="h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber_map_png"
        />
      </div>

      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-1">
          <img
            className="rounded-full w-16"
            src={captainImage}
            alt="captain_img"
          />
          <img
            className="w-16 h-16 rounded-full bg-gray-300"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
            alt="selected_vehicle_img"
          />
        </div>
        <div>
          <h2 className="font-medium text-gray-900">Abhinav Bhardwaaj</h2>
          <h4>5FS2G6</h4>
          <p className="text-sm font-serif">Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center px-4">
        <div className="flex flex-col gap-1 w-full">
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
        <button className="bg-green-950 text-orange-100 rounded-md font-medium text-lg p-2 w-full mt-2 mb-2">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
