import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium">Confirm Your Ride</h3>
        <h1
          onClick={() => {
            props.setConfirmRidePanel(false);
            // props.setVehiclePanel(false)
          }}
          className="font-bold"
        >
          <i className="ri-arrow-down-wide-fill text-2xl"></i>
        </h1>
      </div>

      <div className="flex flex-col justify-between items-center px-4 py-3">
        <img
          className="w-48"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
          alt="selected_vehicle_img"
        />
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
              <p className="text-gray-900 font-serif">
                Cash Cash
              </p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
          props.setVehicleFound(true);
          props.setConfirmRidePanel(false);
        }} className="bg-green-950 text-orange-100 rounded-md font-medium w-full mt-5 py-3 text-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
