import React from "react";
import captainImage from "../../public/ghibli.jpg";

const WaitingForDriver = (props) => {
  return (
    <div className="flex flex-col px-2">
      <div className="flex items-center justify-center">
        <h1
          onClick={() => {
            props.setConfirmRidePanel(false);
          }}
          className="font-bold"
        >
          <i className="ri-arrow-down-wide-fill text-2xl"></i>
        </h1>
      </div>

      <div className="flex items-center justify-between">
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

      <div className="flex flex-col justify-between items-center px-4 py-3">
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
