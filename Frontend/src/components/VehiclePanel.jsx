import React from "react";

const VehiclePanel = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between p-2 gap-3">
        <h3 className="text-2xl font-medium">Choose your Vehicle</h3>
        <h1
          onClick={() => {
            props.setVehiclePanel(false);
          }}
          className="font-bold"
        >
          <i className="ri-arrow-down-wide-fill text-2xl"></i>
        </h1>
      </div>

      <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex items-center justify-between rounded-md bg-slate-200 p-2 active:border-black border-2">
        <img
          className="h-16 w-auto"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
          alt="uber_car"
        />
        <div className="flex flex-col">
          <h4 className="flex items-center gap-2 text-sm font-semibold">
            UBER GO{" "}
            <span className="flex items-center gap-1">
              <i className="ri-user-2-fill"></i>4
            </span>
          </h4>
          <h5 className="text-sm text-gray-900">2 mins Away</h5>
          <p className="text-sm text-gray-900">Affordable compact rides</p>
        </div>
        <h2 className="flex items-center text-xl font-medium">
          193.5 <i className="ri-money-rupee-circle-fill"></i>
        </h2>
      </div>

      <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex items-center justify-between bg-slate-200 p-2 active:border-black border-2 rounded-md shadow-lg p-">
        <img
          className="h-16 w-auto"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="uber_moto"
        />
        <div className="flex flex-col">
          <h4 className="flex items-center gap-2 text-sm font-semibold">
            MOTO{" "}
            <span className="flex items-center gap-1">
              <i className="ri-user-2-fill"></i>2
            </span>
          </h4>
          <h5 className="text-sm text-gray-900">2 mins Away</h5>
          <p className="text-[12px] text-gray-900">
            Affordable Motorcycle rides
          </p>
        </div>
        <h2 className="flex items-center text-xl font-medium">
          193.5 <i className="ri-money-rupee-circle-fill"></i>
        </h2>
      </div>

      <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex items-center justify-between rounded-md bg-slate-200 p-2 active:border-black border-2">
        <img
          className="h-16 w-auto"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="uber_car"
        />
        <div className="flex flex-col">
          <h4 className="flex items-center gap-2 text-sm font-semibold">
            AUTO{" "}
            <span className="flex items-center gap-1">
              <i className="ri-user-2-fill"></i>2
            </span>
          </h4>
          <h5 className="text-sm text-gray-900">2 mins Away</h5>
          <p className="text-sm text-gray-900">Affordable auto rides</p>
        </div>
        <h2 className="flex items-center text-xl font-medium">
          193.5 <i className="ri-money-rupee-circle-fill"></i>
        </h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
