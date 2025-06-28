import React from "react";
import captainImage from "../../public/ghibli.jpg";

const RidePopUp = (props) => {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between pt-5">
        <h3 className="text-2xl font-medium">New Ride Available</h3>
        <h1
          onClick={() => {
            props.SetRidePopUpPanel(false);
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

      <div className="flex flex-col justify-between items-center gap-2">
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
        
        <div className="w-full flex flex-col items-center gap-3 mt-3">
          <button
            onClick={() => {props.SetConfirmRidePopupPanel(true)}}
            className="bg-green-700 text-orange-100 rounded-md font-medium py-2 text-lg w-full"
          >
            Accept
          </button>
          <button
            onClick={() => {props.SetRidePopUpPanel(false);}}
            className="bg-gray-300 shadow-md text-gray-800 rounded-md font-medium py-2 text-lg w-full"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
